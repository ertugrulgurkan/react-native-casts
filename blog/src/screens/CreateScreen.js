import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  return (
    <View>
      <Text>Create A New Blog Post</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default CreateScreen;
