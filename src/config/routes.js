import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Dashboard  from '../screens/dashboard';
import Notifications from '../screens/notifications';
import Search from '../screens/search';

export const Drawer = DrawerNavigator({
  Home: {
    screen: Dashboard,
    navigationOptions: {
      drawer: {
        label: 'Home',
      },
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      drawer: {
        label: 'Notifications',
      },
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      drawer: {
        label: 'Search',
      },
    },
  },
},
{
  drawerPosition: 'right'
}

);