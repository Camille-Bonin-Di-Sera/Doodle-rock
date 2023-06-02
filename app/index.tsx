import React, { useCallback } from 'react';
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import "expo-router/entry";
import {Link} from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Button } from 'react-native-elements';
import "expo-router/entry";



SplashScreen.preventAutoHideAsync();

const Skull = require('../assets/images/skull.png');
const Hand = require('../assets/images/hand.png');


export default function App(): JSX.Element | null{
  const [fontsLoaded] = useFonts({
    'Who asks Satan': require('../assets/fonts/satan.ttf'),
    'ZOMBIES REBORN': require('../assets/fonts/zombie.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  

  
  return ( !fontsLoaded ? null :
    <View style={styles.container} onLayout={onLayoutRootView}>
        <LinearGradient
        colors={['#6ad14d', 'black','black','black','black','black', '#6ad14d']}
        style={styles.gradient}
      />
      <Text style={styles.title}>Nightmare</Text>
      <Image
        source={Skull} 
        style={{width: 100, height: 100}}
      />
     
      <StatusBar />
      <Link href="/galery"  style={styles.btn}>
        <View style={styles.textContainer}>
        <Text style={styles.movies}>Nos films</Text> 
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={Hand}
            style={[styles.image]}
          />
        </View>
        
      </Link>
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
    fontSize: 80,
    zIndex:999999,
    fontFamily:'Who asks Satan',
  },
  homeLink :{
    color: '#fff',
    marginTop: 50,
    fontSize: 15,
    zIndex:999999,
  },
  btn :{
    justifyContent: 'center',
    marginTop:12,
  },
  movies :{
    color: '#fff',
    fontSize: 20,
  },
  imageContainer: {
    transform: [{ rotate: '90deg' }],
    zIndex:999999,
  },
  textContainer: {
    zIndex:999999,
    height:45,
    width:120,
  },
  image: {
    width: 70,
    height: 70,
  },
});
