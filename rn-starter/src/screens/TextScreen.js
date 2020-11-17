import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {
    const [name, setName] = useState(' ');
    const [password, setPassword] = useState(' ');

    return (
        <View>
            <Text>Enter Your Name</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My Name is {name}</Text>
            <Text>Enter Your Password</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 4 ? <Text>Password must be 4 characters at least.</Text> : null}
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1
    }
});

export default TextScreen;