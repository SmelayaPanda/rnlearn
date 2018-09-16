import React from 'react'
import PropTypes from 'prop-types'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const placeItem = props => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image
                source={{uri: props.placeImage}}
                resizeMode={'cover'}
                style={styles.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
)


const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

placeItem.propTypes = {
    onItemPressed: PropTypes.func.isRequired,
    placeImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]),
    placeName: PropTypes.string.isRequired,
}

placeItem.defaultProps = {
}


export default placeItem