import React from 'react';
import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

//import store
import configStore from './src/Store/store'

const store = configStore();

//import screens
import Home from "./src/View/Home";//Home

//register home screen to navigation
Navigation.registerComponent('bucketlist.Home',
  () =>
    Home,
  store,
  Provider
);

//start single screen app
export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'bucketlist.Home',
    title: 'Home',
    navigatorStyle: {
      navBarHidden: true //hidden the nav bar
    }
  }
})