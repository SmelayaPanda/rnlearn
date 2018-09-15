import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default class App extends React.Component {
    state = {
        placeName: ''
    }

    onPlaceNameChange = val => {
        this.setState({placeName: val});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Panda!</Text>
                <TextInput
                    style={{width: 300}}
                    placeholder={'An awesome place'}
                    value={this.state.placeName}
                    onChangeText={this.onPlaceNameChange}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
