import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const placeItem = props => (
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
)

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#eee'
    }
})

export default placeItem