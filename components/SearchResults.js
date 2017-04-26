'use strict';

import React, { Component } from 'react'
import { Image, ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

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

  renderRow(rowData, sectionID, rowID) {
    return (
      
        
          {rowData.title}
        
      
    );
  }

  render() {
    return (
      
    );
  }

}

module.exports = SearchResults;