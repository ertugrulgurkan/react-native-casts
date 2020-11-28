import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { SafeAreaView  } from "react-navigation";
const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{top: "always"}}>
      <Spacer />
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer />
      <Button title="Sign Out" onPress={signout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
