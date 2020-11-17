import React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet } from 'react-native';

const ExersiceScreen = () => {
    const myName = "Ertuğrul";

    return (<View>
        <Text style={styles.textStyle}>Getting stated with react native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {myName}</Text>
    </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ExersiceScreen;