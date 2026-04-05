import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import StarWarsCard from '../components/StarWarsCard';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/films')
      .then((response) => response.json())
      .then((data) => setFilms(data.result));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={films}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <StarWarsCard
            title={item.properties.title}
            subtitle="Film"
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});