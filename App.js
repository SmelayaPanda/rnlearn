import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import PlacesList from './src/component/PlacesList/PlacesList'
import PlaceInput from './src/component/PlaceInput/PlaceInput'
import tailand1 from './src/assets/tailand.jpg'

export default class App extends React.Component {
    state = {
        placeName: '',
        places: []
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
                image: tailand1
            })
        }))
    }

    onPlaceDelete = (key) => {
        this.setState(prevState => ({
            places: prevState.places.filter(place => place.key !== key)
        }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Panda!</Text>
                <PlaceInput
                    placeName={this.state.placeName}
                    onPlaceChange={this.onPlaceNameChange}
                    onPlaceSubmit={this.onPlaceSubmit}
                />
                <PlacesList
                    onItemDeleted={this.onPlaceDelete}
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
