import React, { useCallback } from 'react';
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import "expo-router/entry";
import {Link} from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

const Skull = require('../assets/images/skull.png');


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
      <Link  href="/galery"  style={styles.homeLink}>Nos films</Link>
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
});
