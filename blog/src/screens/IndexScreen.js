import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const blogPost = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        keyExtractor={(blogPost) => blogPost.title}
        data={blogPost}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});
export default IndexScreen;
