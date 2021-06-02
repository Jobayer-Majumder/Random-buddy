import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function SwipeableImage({user}) {
    return (
        <View>
            <Image src={{uri: user.picture.large}} style={styles.photo}></Image>
        </View>
    )

}
const styles = StyleSheet.create({
    photo:{
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20
    }
})