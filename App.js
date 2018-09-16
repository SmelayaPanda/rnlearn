import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import PlacesList from './src/component/PlacesList/PlacesList'
import PlaceInput from './src/component/PlaceInput/PlaceInput'
import PlaceDetail from './src/component/PlaceDetail/PlaceDetail'

export default class App extends React.Component {
    state = {
        placeName: '',
        places: [],
        selectedPlace: null
    }

    onPlaceNameChange = val => {
        this.setState({placeName: val})
    }

    onPlaceSubmit = () => {
        if (!this.state.placeName.trim()) return
        this.setState(prevState => ({
            placeName: '',
            places: prevState.places.concat({
                key: Math.random().toString(),
                name: prevState.placeName.trim(),
                image:  'https://www.votpusk.ru/country/cnimages/new/thailand.jpg'
            })
        }))
    }

    onPlaceSelected = (key) => {
        this.setState(prevState => ({
            selectedPlace: prevState.places.find(place => place.key === key)
        }))
    }

    onPlaceDelete = () => {
        this.setState(prevState => ({
            places: prevState.places.filter(place => place.key !== prevState.selectedPlace.key),
            selectedPlace: null
        }))
    }

    onModalClose = () => {
        this.setState({selectedPlace: null})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Panda!</Text>
                <PlaceDetail
                    selectedPlace={this.state.selectedPlace}
                    onItemDeleted={this.onPlaceDelete}
                    onModalClose={this.onModalClose}
                />
                <PlaceInput
                    placeName={this.state.placeName}
                    onPlaceChange={this.onPlaceNameChange}
                    onPlaceSubmit={this.onPlaceSubmit}
                />
                <PlacesList
                    onItemSelected={this.onPlaceSelected}
                    places={this.state.places}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
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
