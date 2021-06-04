import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {FontAwesome5, FontAwesome} from '@expo/vector-icons'

export default function TopBar() {
    return (
        <View style={styles.container}>
            <FontAwesome5 name="fire" size={27} color="#F06795" />
            <FontAwesome5 name="comments" size={27} color="#F06795" />
            <FontAwesome5 name="user" size={27} color="#F06795" />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:60,
        flexDirection:'row',
        justifyContent:'space-around',
        padding:15,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOffset:{

        }
    }
})