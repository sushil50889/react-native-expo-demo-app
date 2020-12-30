import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { windowWidth, windowHeight } from '../helpers/static-data/screenWidthHeight';

const SlideCard = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.review}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

export const SlideCard2 = ({ result }) => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={{ uri: result.image_url }} /> */}
      {/* <Text style={styles.name}>{result.name}</Text> */}
      {/* <Text style={styles.review}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text> */}
      <View style={styles.sizeBox}>
        <Text style={{alignItems: 'center', alignContent: 'center', justifyContent: 'center', alignSelf: 'center', textAlignVertical: 'center'}}>5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    // marginRight: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 10,
    marginBottom: 5
  },
  sizeBox: {
    // flex: 1,
    backgroundColor: '#666',
    width: windowWidth * 0.21,
    height: windowHeight * 0.065,
    borderRadius: 10,
    marginBottom: 5,
    borderColor: '#eeeeee',
    borderWidth: 1
  },
  name: {
    fontWeight: 'bold',
    fontSize: 13
  },
  review: {
    fontSize: 12
  },
});

export default SlideCard;
