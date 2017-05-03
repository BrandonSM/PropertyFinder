'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  
});

class SearchResults extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.lister_url !== r2.lister_url});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      
       <View style={styles.container}>
          <Text style={styles.text}>{rowData.rowID}</Text>
       </View>
      
    );
  }

  render() {
    return (
      <View></View>
    );
  }

}

module.exports = SearchResults;