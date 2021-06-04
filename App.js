import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, View} from 'react-native';
import axios from 'axios'
import Constants from 'expo-constants'
import TopBar from './components/TopBar';
import Swipes from './components/Swipes';

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipesRef = useRef(null)
  
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

  function handleLike() {
    console.log('like')
    nextUser()
  }

  function handlePass() {
    console.log('pass')
    nextUser()
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

 

  return (
    <View style={styles.container}>
      <TopBar></TopBar>
      <View style={styles.swipes}>
        {users.length > 1 &&
          users.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  users={users}
                  handleLike={handleLike}
                  handlePass={handlePass}
                ></Swipes>
              )
          )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Constants.statusBarHeight,
    backgroundColor: '#e2e2e2'
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
