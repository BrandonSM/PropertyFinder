/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
const React = require('react');
const SearchPage = require('./components/SearchPage.js');
const SearchResults = require('./components/SearchResults.js');

import { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';


const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  },
});

export default class PropertyFinder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
