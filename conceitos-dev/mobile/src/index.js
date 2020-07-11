import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
    return (
        <>
        <StatusBar barStyle='light-content' backgroundColor='red' />
        <View style={styles.container}>
            <Text style={styles.title}>oi</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
});