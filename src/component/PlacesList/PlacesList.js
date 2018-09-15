import React from 'react'
import PlaceItem from './PlaceItem/PlaceItem'
import {FlatList, StyleSheet} from 'react-native'

const placesList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <PlaceItem
                    placeName={info.item.value}
                    onItemPressed={() => props.onItemDeleted(info.item.key)}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})

export default placesList