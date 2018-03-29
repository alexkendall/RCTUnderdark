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
  View,
  Button,
} from 'react-native';
let BluetoothCP = require("react-native-bluetooth-cross-platform")

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    componentDidMount() {
        this.listener1 = BluetoothCP.addPeerDetectedListener((peer) => {
            BluetoothCP.inviteUser(peer.id)
            console.log('addPeerDetectedListener', peer)
        });
        this.listener2 = BluetoothCP.addPeerLostListener((peers) => {
            console.log('addPeerLostListener', peers)
        });
        this.listener3 = BluetoothCP.addReceivedMessageListener((peers) => {
            console.log('addReceivedMessageListener', peers)
        });
        this.listener4 = BluetoothCP.addInviteListener((peer) => {
            BluetoothCP.acceptInvitation(peer.id)
            console.log('addInviteListener', peer)
        });
        this.listener5 = BluetoothCP.addConnectedListener((peer) => {
            console.log('addConnectedListener', peer)
            BluetoothCP.sendMessage("TEST MESSAGE", peer.id)
        });
        this.listener6 = BluetoothCP.getNearbyPeers((peers) => {
            console.log('getNearbyPeers', peers)
        });
        this.listener7 = BluetoothCP.getConnectedPeers((peers) => {
            console.log('getConnectedPeers', peers)
        });
        console.log('mounted')
        BluetoothCP.advertise('WIFI');
    }

    callback(user) {
        console.log(user)
    }

    advertise(){
        console.log('advertising');
        BluetoothCP.advertise('WIFI');
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <Button
         onPress={this.advertise}
         title={"Connect to Device"}
       />
      </View>
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
