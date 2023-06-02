import { StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import "expo-router/entry";
import {useRouter} from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback } from 'react';
import "expo-router/entry";
import {Link} from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Card from './component/card'



SplashScreen.preventAutoHideAsync();


export default function PageGalery() {
  const router = useRouter();
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
    <View style={styles.container}>
      <LinearGradient
        colors={['#6ad14d', 'black','black','black','black','black', '#6ad14d']}
        style={styles.gradient}
      />
      <Text style={styles.title}>Nightmare</Text>
    
      <StatusBar />
      <Card /> {/* Utilisation du composant Card ici */}
      <Button onPress={() => router.back()} title='Retour' color={"black"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex:0,
  },
  title :{
    color: '#fff',
    marginTop: 20,
    marginBottom: 16,
    fontSize: 60,
    zIndex:999999,
    fontFamily:'Who asks Satan',
  },
  homeLink :{
    color: '#fff',
    marginTop: 50,
    fontSize: 20,
    zIndex:999999,
    backgroundColor: 'red',
    padding: 20,
  },
  goback :{
    color: '#fff',
    marginTop: 50,
    fontSize: 15,
    zIndex:999999,
    textAlignVertical: 'bottom',
  },
  
});
