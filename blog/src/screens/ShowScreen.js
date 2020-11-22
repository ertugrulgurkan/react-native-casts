import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id)
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  /*row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },*/
});
export default ShowScreen;
