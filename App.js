import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import PlacesList from './src/component/PlacesList/PlacesList'
import PlaceInput from './src/component/PlaceInput/PlaceInput'

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
            places: prevState.places.concat(prevState.placeName.trim())
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
                <PlacesList places={this.state.places}/>
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
