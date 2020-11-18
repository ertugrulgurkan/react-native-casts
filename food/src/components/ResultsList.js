import React from 'react';
import { FlatList, View } from 'react-native';
import { Text, StyleSheet } from 'react-native';


const ResulList = ({ title, results }) => {
    return (<View>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text>Results : {results.length}</Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({ item }) => {
                return <Text> {item.name}</Text>
            }}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResulList;