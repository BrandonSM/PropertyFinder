'use strict';

const React = require('react');
import { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text
} from 'react-native';

// This code iterates through a list of JSON results, and parses them.
class SearchResults extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.lister_url !== r2.lister_url});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  renderRow(rowEx, sectionID, rowID) {
    return (
    	{rowEx}
  	);
  }

  render() {
  	//return (

  	//);
  }

}

module.exports = SearchResults;