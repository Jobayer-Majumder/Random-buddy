import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import axios from 'axios'
import SwipeableImage from './components/SwipeableImage';
import Constants from 'expo-constants'
import TopBar from './components/TopBar';
export default function App() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  async function fetchRandomUsers(){
    try {
      const {data} = await axios.get('https://randomuser.me/api/?gender=female&results=50')
      setUsers(data.results);
    } catch (error) {
      console.log('Something went wrong while fetching data')
      Alert.alert('Error fetching users', '', [{text: 'Retry', onPress: () => fetchRandomUsers()}])
    }
  }
  useEffect(() =>{
    fetchRandomUsers()
  }, [])
  return (
    <View style={styles.container}>
      <TopBar></TopBar>
      <View style={styles.swipes}>
          {users.length > 1 && (<SwipeableImage user={users[currentIndex]}/>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Constants.statusBarHeight
  },
  swipes:{
    flex:1,
    paddingTop:20,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius:5,
    elevation: 7
  }
});
