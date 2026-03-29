<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
=======
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
        
        <View style={styles.column}>
          <View style={styles.box}><Text>#1</Text></View>
          <View style={styles.box}><Text>#2</Text></View>
          <View style={styles.box}><Text>#5</Text></View>
          <View style={styles.box}><Text>#6</Text></View>
          <View style={styles.box}><Text>#9</Text></View>
          <View style={styles.box}><Text>#10</Text></View>
        </View>

        <View style={styles.column}>
          <View style={styles.box}><Text>#3</Text></View>
          <View style={styles.box}><Text>#4</Text></View>
          <View style={styles.box}><Text>#7</Text></View>
          <View style={styles.box}><Text>#8</Text></View>
          <View style={styles.box}><Text>#11</Text></View>
          <View style={styles.box}><Text>#12</Text></View>
>>>>>>> e47927d867726ad004f1bc697d5612bd3eb62bdd
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
      
=======
    flexDirection: 'column',
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    }),
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  column: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box: {
    width: 80,
    height: 80,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
>>>>>>> e47927d867726ad004f1bc697d5612bd3eb62bdd
  },
});