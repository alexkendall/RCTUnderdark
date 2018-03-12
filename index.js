import {
  NativeModules,
  NativeEventEmitter,
} from 'react-native'
import React from 'react'

var NativeManager = NativeModules.NetworkManager
var NativeEmitter =  new NativeEventEmitter(NativeModules.NetworkManager)

class NetworkManager {
  // kind can be one of "WIFI", "BT", and "WIFI-BT"
  browse(kind) {
    NativeManager.browse(kind)
  }
  // kind can be one of "WIFI", "BT", and "WIFI-BT"
  advertise(kind) {
    NativeManager.advertise(kind)
  }
  stopAdvertising() {
    NativeManager.stopAdvertising()
  }
  stopBrowsing() {
    NativeManager.stopBrowsing()
  }
  disconnectFromPeer(peerId) {
    NativeManager.disconnectFromPeer(peerId)
  }
  inviteUser(peerId) {
    NativeManager.inviteUser(peerId)
  }
  sendMessage(message, peerId) {
    NativeManager.sendMessage(message, peerId)
  }
  acceptInvitation(peerId) {
    NativeManager.acceptInvitation(peerId)
  }
  getNearbyPeers(callback) {
    NativeManager.getNearbyPeers((peers) => {
      callback(peers)
    })
  }
  getConnectedPeers(callback) {
    NativeManager.getConnectedPeers((peers) => {
      callback(peers)
    })
  }
  removeListeners() {
    this.listener1.remove();
    this.listener2.remove();
    this.listener3.remove();
    this.listener4.remove();
    this.listener5.remove();
  }
  /*listener callbacks
  peer contains .id (string), type(string), connected(bool), message(string), display name(string)
  */
  addPeerDetectedListener(callback) {
    this.listener1 = NativeEmitter.addListener(
    'detectedUser',
    (peer) =>  callback(peer)
    )
  }
  addPeerLostListener(callback, listener2) {
    this.listener2 = NativeEmitter.addListener(
    'lostUser',
    (peer) => callback(peer)
    )
  }
  addReceivedMessageListener(callback, listener3) {
    this.listener3 = NativeEmitter.addListener(
      'messageReceived',
      (peer) => callback(peer)
    );
  }
  addInviteListener(callback, listener4) {
    this.listener4 = NativeEmitter.addListener(
      'receivedInvitation',
      (peer) => callback(peer)
    )
  }
  addConnectedListener(callback, listener5) {
    this.listener5 = NativeEmitter.addListener(
      'connectedToUser',
      (peer) => callback(peer)
    )
  }
}

module.exports = new NetworkManager()
