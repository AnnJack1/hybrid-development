import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import StarWarsCard from "../components/StarWarsCard";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => setPlanets(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={planets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <StarWarsCard
            title={item.name}
            subtitle={`Climate: ${item.climate}`}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});