import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import "expo-router/entry";
import {Link} from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
const Skull = require('../assets/skull.png');

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
        <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradient}
      />
      <Text style={styles.title}>Rock'n roses</Text>
      <Image
        source={Skull} 
        style={{width: 200, height: 200}}
      />
      <StatusBar />
      <Link  href="/home"  style={styles.homeLink}> Galery</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex:0,
  },
  title :{
    color: '#fff',
    marginBottom: 16,
    fontSize: 30,
    zIndex:999999,
  },
  homeLink :{
    color: '#fff',
    marginTop: 50,
    fontSize: 15,
    zIndex:999999,
  },
});
