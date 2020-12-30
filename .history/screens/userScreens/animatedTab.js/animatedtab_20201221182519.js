import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions, Animated, findNodeHandle, TouchableOpacity } from 'react-native';
import { animatedTabImages } from '../../../helpers/static-data/dummyData';
import normalizeFontSize from '../../../helpers/static-data/dynamicFontSize';
import { fonts } from '../../../helpers/static-data/fonts';

const {width, height} = Dimensions.get('screen');

const data = Object.keys(animatedTabImages).map((i) => ({
  key: i,
  title: i,
  image: animatedTabImages[i],
  ref: React.createRef()
}));

// console.log(data);
const Tab= React.forwardRef(({item, onItemPress}, ref)=>{
    return (
        <TouchableOpacity onPress={onItemPress}>
            <View ref={ref}>
                <Text style={{color: 'white', fontSize: normalizeFontSize(85/data.length), fontFamily: fonts.epiloguevariable, textTransform: 'uppercase'}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
})

const Tabs= ({scrollx, data, onItemPress})=>{

    const containerRef = useRef();
    const [measures, setMeasures] = React.useState([]);

    React.useEffect(()=>{
        let m = [];
        data.forEach((item) => {
            item.ref.current.measureLayout(containerRef.current, 
                (x, y, width, height) => {
                    // console.log(x, y, width, height);
                    m.push({x, y, width, height});

                    if(data.length === m.length){
                        setMeasures(m);
                    }
                } 
            )
        })
    }, []);

    return (
        <View style={{position: 'absolute', width, top: 75}}>
            <View ref={containerRef} style={{
                // backgroundColor: 'white',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly'
                }}>
                {data.map((item, index)=>{
                    return <Tab key={item.key} item={item} ref={item.ref} onItemPress={onItemPress(index)}/>
                })}
            </View>
            { measures.length > 0 && (<Indicator measures={measures} scrollx={scrollx}/>) }
        </View>
    )
}

const Indicator = ({measures, scrollx}) => {
    const inputRange = data.map((_, i)=> i * width);
    const indicatorWidth = scrollx.interpolate({
        inputRange,
        outputRange: measures.map((measure)=> measure.width)
    });
    const translateX = scrollx.interpolate({
        inputRange,
        outputRange: measures.map((measure)=> measure.x)
    });

    return (
        <Animated.View style={{
            position: 'absolute',
            height: 3,
            width: indicatorWidth,
            backgroundColor: 'white',
            bottom: -5,
            left: 0,
            transform: [{translateX}]
        }}/>
    )
}

export default function AnimatedTabs() {
    const scrollX = useRef(new Animated.Value(0)).current;
    // console.log('scrollX  :  ', scrollX);
    const refFlatlist = useRef();

    const onItemPress = React.useCallback(itemIndex => {
        if(refFlatlist && refFlatlist.current){
            refFlatlist.current.scrollToOffset({offset: itemIndex * width})
        }        
    })
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.FlatList
        ref={refFlatlist}
        data={data}
        keyExtractor={(item)=> item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={
            Animated.event(
                [{
                    nativeEvent: {contentOffset: {x: scrollX}}
                }],
                {useNativeDriver: false}
            )
        }
        renderItem={({item}) => {
                return (
                    <View style={{width, height}}>
                        <Image source={{uri: item.image}} style={{flex: 1, resizeMode: 'cover'}}/>
                        <View style={[StyleSheet.absoluteFillObject, {backgroundColor: 'rgba(0, 0, 0, 0.5)'}]}/>
                    </View>
                )
            }
        }
      />

      <Tabs scrollx={scrollX} data={data} onItemPress={onItemPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});