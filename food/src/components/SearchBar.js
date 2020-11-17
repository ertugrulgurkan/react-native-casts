import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle} >
            <Feather name="search" style={styles.iconStyle} color="black" />
            <TextInput 
            style={styles.inputStyle}
            placeholder="Search" />
        </View>
    );

}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 15,
        marginTop: 10,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;