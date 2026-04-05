import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import StarWarsCard from '../components/StarWarsCard';

export default function Spaceships() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/starships')
      .then((response) => response.json())
      .then((data) => setShips(data.results));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={ships}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <StarWarsCard
            title={item.name}
            subtitle="Starship"
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