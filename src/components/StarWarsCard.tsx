import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
};

export default function StarWarsCard({ title, subtitle }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#cccccc",
    marginTop: 4,
  },
});