import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  //console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>
        Hi there!
      </Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('Exersize')}
        title="Exersise Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="ImageScreen Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Counter Exersize Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Color Exersize Demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Square Screen Demo"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Text Screen Demo"
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Box Screen Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
