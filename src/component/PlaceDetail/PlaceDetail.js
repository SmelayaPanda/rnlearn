import React from 'react'
import PropTypes from 'prop-types'
import {Button, Image, Modal, StyleSheet, Text, View} from 'react-native'

const placeDetails = props => {
    let modalContent = null
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={{uri: props.selectedPlace.image}} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        )
    }

    return (
        <Modal
            visible={props.selectedPlace !== null}
            animationType={'slide'}
            onRequestClose={props.onModalClose}>
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title={'Delete'} onPress={props.onItemDeleted} color={'red'}/>
                    <Button title={'Close'} onPress={props.onModalClose}/>
                </View>
            </View>
        </Modal>)
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 25
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    }
})

placeDetails.propTypes = {
    selectedPlace: PropTypes.object,
    onItemDeleted: PropTypes.func.isRequired,
    onModalClose: PropTypes.func.isRequired
}
export default placeDetails