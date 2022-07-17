/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Search = ({text, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={x => onChangeText(x)}
      value={text}
    />
  );
};
const styles = StyleSheet.create({
    input: {
      height: 60,
      margin: 12,
      border: 'none',
      borderRadius: 15,
      padding: 10,
      backgroundColor: '#ECEFF1',
      color: '#B7B9BC',
      fontSize: 20,
    },
  });

export default Search;
