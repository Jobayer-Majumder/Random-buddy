import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {FontAwesome5, FontAwesome} from '@expo/vector-icons'

export default function TopBar() {
    return (
        <View style={styles.container}>
            <FontAwesome5 name="fire" size={27} color="#fff" />
            <FontAwesome5 name="comments" size={27} color="#f9cada" />
            <FontAwesome5 name="user" size={27} color="#f9cada" />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:60,
        flexDirection:'row',
        justifyContent:'space-around',
        padding:15,
        backgroundColor:'#767373',
        shadowColor:'#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.46,
        elevation: 9
    }
})