import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import statusBarHeight from '../helpers/statusbar/statusbar';
import SlideCard from './sliderCard';

const SliderSection = ({ title, results, navigation }) => {
  
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{title}</Text> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                {}
                // navigation.navigate('ResultsShow', { id: item.id })
              }
            >
              <SlideCard result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 20
  },
  container: {
    // marginBottom: 15,
    paddingTop: statusBarHeight+10,
    // ...StyleSheet.absoluteFillObject
  }
});

// export default withNavigation(SliderSection);
export default SliderSection;
