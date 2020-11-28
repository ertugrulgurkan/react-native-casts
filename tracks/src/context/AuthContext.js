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
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
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

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("Signup");
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
