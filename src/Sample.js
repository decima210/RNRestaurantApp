/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Sample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialIcons name="home" size={30} color="#900" />
      <Ionicons name="pizza" size={30} color="#900" />
      <Text style={{fontFamily: 'Roboto-Bold', fontSize: 20}}>Home</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: StatusBar.currentHeight || 0,

    justifyContent: 'center',

    alignItems: 'center',
  },
});

export default Sample;
