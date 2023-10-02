import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Settings from "../../src/screens/Private/Settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrivateNavigation from "./index";
const RootStack = () => {
  const Root = createNativeStackNavigator();

  return (
    <Root.Navigator>
      <Root.Screen
        name="BottomTab"
        options={{ headerShown: false }}
        component={PrivateNavigation}
      />
      <Root.Screen name="Settings" component={Settings} />
    </Root.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
