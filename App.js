import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import SwipeableImage from './components/SwipeableImage';
export default function App() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fetchRandomUsers = async () =>{
    try {
      const {data} = await axios.get('https://randomuser.me/api/?gender=female&results=50')
      setUsers(data.results);
      console.log(users)
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
      <View style={styles.swipes}>
          {users.length > 1 && (<SwipeableImage user={users[currentIndex]} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipes:{
    flex:1,
    paddingTop:10,
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
