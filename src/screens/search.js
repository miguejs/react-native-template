import React, { Component } from 'react'
import { Text, Button, View } from 'react-native';


class Search extends Component {

  render() {
    return (
      <View style={{
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Search Screen </Text>
      </View>
    );
  }
}
export default Search;