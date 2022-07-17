/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';

const Item = ({title, imgURL, price, inStock}) => (
  <View style={styles.item}>
    <Image source={{uri: imgURL}} style={styles.image} resizeMode="cover" />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.price}>{price}</Text>
    {!inStock && <Text style={styles.outOfStock}>STOKTA YOK</Text>}
  </View>
);

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#ECEFF1',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 5,
      /* height: Dimensions.get('window').width / 2, // approximate a square */
      width: Dimensions.get('window').width / 2,
      borderRadius: 15,
      padding: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    price: {
      width: '100%',
      fontSize: 20,
      padding: 10,
    },
    outOfStock: {
      color: 'red',
      width: '100%',
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 10,
    },
    image: {
      width: 150,
      height: 140,
      objectFit: 'cover',
      borderRadius: 15,
    },
});

export default Item;