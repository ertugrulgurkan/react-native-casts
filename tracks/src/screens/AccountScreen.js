import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Spacer />
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer />
      <Button title="Sign Out" onPress={signout} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
