import React from 'react'
import PropTypes from 'prop-types'
import {Button, StyleSheet, TextInput, View} from 'react-native'

const placeInput = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.placeInput}
                placeholder={'An awesome place'}
                value={props.placeName}
                onChangeText={props.onPlaceChange}/>
            <Button
                style={styles.placeBtn}
                title={'Add'}
                onPress={props.onPlaceSubmit}/>
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%'
    },
    placeBtn: {
        width: '30%'
    }
})

placeInput.propTypes = {
    onPlaceSubmit: PropTypes.func.isRequired,
    onPlaceChange: PropTypes.func.isRequired,
    placeName: PropTypes.string.isRequired,
}

export default placeInput