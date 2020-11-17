import React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
    <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>);
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        height: 200,
        borderColor: 'black',
        //flexDirection: 'row',
        //justifyContent: 'center,
        //justifyContent: 'center',
        //height: 80,
        //alignItems: 'center'
    },
    textStyle: {
        borderColor: 'red',
        borderWidth: 3,
    },
    textOneStyle: {
        borderColor: 'red',
        borderWidth: 3,
    },
    textTwoStyle: {
        borderColor: 'red',
        borderWidth: 3,
        //alignSelf: 'center',
        //flex: 2,
        //top: 10,

        
        //to fill all the box;
        /*
        top:0,bottom:0,left:0,right:0,
        ...StyleSheet.absoluteFillObject 
        position: 'absolute',
        backgroundColor: 'red',
        */
    },
    textThreeStyle: {
        borderColor: 'red',
        borderWidth: 3,
    },
});

export default BoxScreen;