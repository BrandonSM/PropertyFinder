'use strict';
 
const React = require('react');
const SearchResults = require('./SearchResults.js');
import { Component } from 'react';
import { ActivityIndicator, TouchableHighlight, Image, StyleSheet, Text, TextInput, View }  from 'react-native';

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  flowRight: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  alignSelf: 'stretch'
	},
	buttonText: {
	  fontSize: 18,
	  color: 'white',
	  alignSelf: 'center'
	},
	button: {
	  height: 36,
	  flex: 1,
	  flexDirection: 'row',
	  backgroundColor: '#48BBEC',
	  borderColor: '#48BBEC',
	  borderWidth: 1,
	  borderRadius: 8,
	  marginBottom: 10,
	  alignSelf: 'stretch',
	  justifyContent: 'center'
	},
	searchInput: {
	  height: 36,
	  padding: 4,
	  marginRight: 5,
	  flex: 4,
	  fontSize: 18,
	  borderWidth: 1,
	  borderColor: '#48BBEC',
	  borderRadius: 8,
	  color: '#48BBEC'
	},
	image: {
 	 width: 217,
  	 height: 138
	}
});

// This is a freestanding function that is not dependent on anything
function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber
  };
  data[key] = value;
 
  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');
 
  return 'https://api.nestoria.co.uk/api?' + querystring;
};

class SearchPage extends Component {

  // Setting the initial state of the search
  constructor(props) {
 	 super(props);
 	 this.state = {
     	searchString: 'london',
     	isLoading: false, // Keeps track of whether a query is in progress
     	message: ''
 	 };
	}

	//This takes the value from the native browser event’s text property and uses it to update the component’s state. 
	onSearchTextChanged(event) {
	  console.log('onSearchTextChanged');
	  this.setState({ searchString: event.nativeEvent.text });
	  console.log(this.state.searchString);
	}

	// This makes use of the "fetch" function which is part of the Web API and an improvement on the XMLHttpRequest API. 
	// The return result is a "promise".
	_executeQuery(query) {
	  console.log(query);
	  this.setState({ isLoading: true });
	  fetch(query)
	  .then(response => response.json())
	  .then(json => this._handleResponse(json.response))
	  .catch(error =>
	     this.setState({
	      isLoading: false,
	      message: 'Something bad happened ' + error
	   }));
	}

	onSearchPressed() {
	  var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
	  this._executeQuery(query);
	}

	// This clears the loading state and parses the JSON response if the response code is 1 (which is TRUE)
	_handleResponse(response) {
	  this.setState({ isLoading: false , message: '' });
	  if (response.application_response_code.substr(0, 1) === '1') {
	    this.props.navigator.push({
		  title: 'Results',
		  component: SearchResults,
		  passProps: {listings: response.listings}
		});
	  } else {
	    this.setState({ message: 'Location not recognized; please try again.'});
	  }
	}

  render() {
  	// This either adds the activity indicator, or an empty view based upon the current state
  	var spinner = this.state.isLoading ? ( <ActivityIndicator size='large'/> ) : (<View/>);
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>
        <View style={styles.flowRight}>
		  <TextInput
		    style={styles.searchInput}
		    value={this.state.searchString}
		    onChange={this.onSearchTextChanged.bind(this)}
		    placeholder='Search here..'/>
		  <TouchableHighlight style={styles.button}
		  	  onPress={this.onSearchPressed.bind(this)}
		      underlayColor='#99d9f4'>
		    <Text style={styles.buttonText}>Go</Text>
		  </TouchableHighlight>
		</View>
		<View style={styles.flowRight}>
			<TouchableHighlight 
				style={styles.button}
			    underlayColor='#99d9f4'>
			  <Text style={styles.buttonText}>Location</Text>
			</TouchableHighlight>
		</View>
		<Image source={require('../images/house.png')} style={styles.image}/>
		{spinner}
		<Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }
}

module.exports = SearchPage;

