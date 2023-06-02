import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { useRouter } from 'expo-router';


interface Movie {
  id: number;
  title: string;
  description: string;
}

export default function Card() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://api.example.com/movies'); // Remplacez l'URL par l'API de votre choix
      setMovies(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6ad14d', 'black', 'black', 'black', 'black', 'black', '#6ad14d']}
        style={styles.gradient}
      />
      <Text style={styles.title}>Films d'horreur</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <View>
          {movies.map((movie) => (
            <View key={movie.id} style={styles.movieCard}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
              <Text style={styles.movieDescription}>{movie.description}</Text>
            </View>
          ))}
        </View>
      )}
      <StatusBar />
      <Button onPress={() => router.back()} title="Retour" color="black" />
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
    zIndex: 0,
  },
  title: {
    color: '#fff',
    marginTop: 20,
    marginBottom: 16,
    fontSize: 60,
    zIndex: 999999,
    fontFamily: 'Who asks Satan',
  },
  movieCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieDescription: {
    fontSize: 16,
  },
});
