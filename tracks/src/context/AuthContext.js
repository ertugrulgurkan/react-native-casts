import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    const token = response.data.token;
    await AsyncStorage.setItem("token", token);
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } catch (error) {
    console.log(error);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    const token = response.data.token;
    dispatch({ type: "signin", payload: token });
    await AsyncStorage.setItem("token", token);
    navigate("TrackList");
  } catch (error) {
    console.log(error);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up",
    });
  }
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
