import React from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'

export default class App extends React.Component {
    state = {
        placeName: '',
        places: []
    }

    onPlaceNameChange = val => {
        this.setState({placeName: val})
    }

    placeSubmit = () => {
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
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.placeInput}
                        placeholder={'An awesome place'}
                        value={this.state.placeName}
                        onChangeText={this.onPlaceNameChange}/>
                    <Button
                        style={styles.placeBtn}
                        title={'Add'}
                        onPress={this.placeSubmit}/>
                </View>
                <View>
                    {this.state.places.map((place, i) => {
                        return <Text key={i}>{place}</Text>
                    })}
                </View>
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
