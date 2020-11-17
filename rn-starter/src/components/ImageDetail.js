import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
    return (
        <View>
            <Image source={imageSource}></Image>
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    );
};


const styeSheet = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ImageDetail;
