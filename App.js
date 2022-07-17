/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';

import data from './constants/data';

import Item from '././components/Item';
import Search from './components/Search';

const App = () => {
  const [text, onChangeText] = React.useState('Ara...');
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      imgURL={item.imgURL}
      price={item.price}
      inStock={item.inStock}
    />
  );

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text style={styles.header}>PATIKASTORE</Text>

      <Search text={text} onChangeText={onChangeText} />

      <View style={styles.main}>
        <FlatList
          styles={styles.container}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#800080',
    padding: 20,
  },
  main: {
    padding: 10,
  },
  container: {
    flex: 1,
  },
});

export default App;
