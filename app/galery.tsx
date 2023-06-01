import { StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import "expo-router/entry";
import {useRouter} from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

export default function PageGalery() {
  const router = useRouter();


  return (
    <View style={styles.container}>
        <LinearGradient
        colors={['black', 'red','red','red','red','red', 'black']}
        style={styles.gradient}
      />
      <Text style={styles.title}>Galery</Text>
   
      <StatusBar />
      <Button onPress={()=> router.back()} title='Retour' color={"black"}/>
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
  goback :{
    color: '#fff',
    marginTop: 50,
    fontSize: 15,
    zIndex:999999,
  },
});
