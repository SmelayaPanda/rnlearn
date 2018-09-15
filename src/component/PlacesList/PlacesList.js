import React from 'react'
import ListItem from './PlaceItem/PlaceItem'
import {StyleSheet, View} from 'react-native'

const placesList = props => {
    return (
        <View style={styles.listContainer}>
            {props.places.map((place, i) => {
                return <ListItem key={i} placeName={place}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})

export default placesList