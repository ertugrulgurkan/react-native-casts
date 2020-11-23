import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  console.log(navigation)
  const id = navigation.getParam("id");
  const { state } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text>{id} </Text>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Edit Blog Post"
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          })
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  textInput: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 18,
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
});
export default EditScreen;
