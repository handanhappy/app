/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { UIVIEWS, UICONTROLS, OTHERS, UIBARS } from './src/demo/demoList';

import {
  StackNavigator,
  TabNavigator,
  TabBarTop,
} from 'react-navigation';

import { RnIndex } from './src/demo/RnIndex';
import { MineScreen } from './src/screens/MineScreen/MineScreen';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const scenes = {
  
  // Mine: {
  //   screen: MineScreen,
  // },
  Home: {
    screen: RnIndex,
},
};


[...UIVIEWS, ...UICONTROLS, ...OTHERS, ...UIBARS].map((component) => {
  const Module = component.module.default;
  scenes[component.title] = {
    screen: Module,
    navigationOptions: {
        title: 'component.title',
    }
  };
});

const RocApp = StackNavigator(scenes, {
  headerMode: 'screen',
  navigationOptions: ({navigation}) => {
      return {
          gesturesEnabled: true,
      }
  }
});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RocApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
