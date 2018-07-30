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
  TouchableOpacity,
  View
} from 'react-native';

import { Button, Icon } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import ToastExample from './ToastExample';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
      return (
        <View style={styles.container}>
          <View style={{alignItems:'center', justifyContent:'center', height: 50, backgroundColor: '#00BCD4'}} >
            <Text style={{fontSize:25, color:'#fff'}}>Geek IoT - Vital Signs Sync Log</Text>
          </View>
          <View style={{height: 350}}>
            <Calendar
              // Collection of dates that have to be marked. Default = {}
              markedDates={{
                '2018-06-16': {selected: true, marked: true, selectedColor: 'blue'},
                '2018-06-17': {selected: true, marked: true, selectedColor: 'blue'},
                '2018-06-18': {selected: true, marked: true, selectedColor: 'blue'},
                '2018-06-19': {selected: true, marked: true, selectedColor: 'blue'},
              }}
            />
          </View>
          <View style={{alignItems: 'center',}}>
            <TouchableOpacity style={styles.syncButton}>
              <Icon name={"cached"}  size={30} color="#fff"/><Text style={{color:'#fff'}}>Sync Now</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={styles.footerText}>
              Vital Signs last sync at <Text style={{fontWeight:'bold'}}>19-Jun-2018 10:29pm</Text>
              {ToastExample.show('Awesome123', ToastExample.SHORT)}
            </Text>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    syncButton: {
         borderWidth:1,
         borderColor:'rgba(0,0,0,0)',
         alignItems:'center',
         justifyContent:'center',
         width:150,
         height:150,
         backgroundColor:'#00BCD4',
         borderRadius:100,
    },
    footerText: {
      alignItems:'center',
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'#fff',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
  });
