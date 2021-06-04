import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'


const BottomBar = () => (
    <View style={styles.container}>
        <View />
        <TouchableOpacity style={styles.button}>
            <FontAwesome name='times' size={27} color='#F06795'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <FontAwesome name='heart' size={27} color='#64EDCC'/>
        </TouchableOpacity>
        <View />
    </View>
);

export default BottomBar;


const styles = StyleSheet.create({
    container: {
        height: 75,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.46,
        elevation: 9
    }
});