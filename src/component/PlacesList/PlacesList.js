import React from 'react'
import PropTypes from 'prop-types'
import PlaceItem from './PlaceItem/PlaceItem'
import {FlatList, StyleSheet} from 'react-native'

const placesList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <PlaceItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
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

placesList.propTypes = {
    places: PropTypes.array.isRequired,
    onItemSelected: PropTypes.func.isRequired
}

export default placesList