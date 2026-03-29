import { View, Text, StyleSheet } from 'react-native';
export default function Spaceships() {
  return (
    <View style={styles.container}>
      <Text>Spaceships</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});