import React from "react";
import { FlatList, View } from "react-native";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ResultsDetail from "../components/ResultsDetail";
import { withNavigation } from "react-navigation";

const ResulList = ({ title, results, navigation }) => {

    if(!results.length){
        return (
            <View></View>
        );
    }

  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Result", { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: "bold",
  },
});

export default withNavigation(ResulList);
