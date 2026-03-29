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
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});