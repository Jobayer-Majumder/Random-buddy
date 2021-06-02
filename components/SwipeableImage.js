import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

export default function SwipeableImage({user}) {
    return (
        <View>
            <Image src={{uri: user.picture.large}} style={styles.photo}></Image>
            <View style={styles.textContainer}>
                <View style={style.textRow}>
                    <Text>{user.name.first}</Text>
                    <Text>{user.dob.age}</Text>
                </View>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    photo:{
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20
    },
    textContainer:{
        position: 'absolute',
        bottom:20,
        left:20
    },
    textRow:{
        flexDirection: 'row',
        alignItems:center
    }
})