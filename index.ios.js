/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
const ReactNative = require('react-native');
const React = require('react');

import { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

export default class PropertyFinder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'derp',
          component: HelloWorld,
        }}/>
      </View>
    );
  }
}

export class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    )
  }
}

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

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
