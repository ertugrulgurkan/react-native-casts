import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Monica', age: 21 },
        { name: 'Chandler', age: 20 },
        { name: 'Joey', age: 23 },
        { name: 'Phoebe', age: 24 },
        { name: 'Ross', age: 21 },
    ];
    return (
        <FlatList
            //horizontal
            //showsHorizontalScrollIndicator = {false}
            //showsVerticalScrollIndicator = {false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>
                    Name : {item.name} - Age : {item.age}
                </Text>
            }} />
    );
}


const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default ListScreen;