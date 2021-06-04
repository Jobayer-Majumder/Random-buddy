import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomBar from './Components/bottomBar/BottomBar';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>hello world</Text>
      <BottomBar />
=======
      <Text>hello react native</Text>
>>>>>>> 94f4c460b12f5a68755bb7e183cdfa090dad5747
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
