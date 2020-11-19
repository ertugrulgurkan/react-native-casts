import { StatusBar } from "expo-status-bar";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultsShowScreen,

  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Food Search",
    },
  }
);

export default createAppContainer(navigator);
