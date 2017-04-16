import React, { component } from 'react';
import { StatusBar, View, Platform, Text } from 'react-native';
import { Drawer } from  './config/routes';
const App = () => (
    <View style={{ flex: 1 }}>
      <Drawer/>
    </View>
);


export default App;