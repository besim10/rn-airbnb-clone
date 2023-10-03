import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Settings from "../../src/screens/Private/Settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrivateNavigation, { TabParamList } from "./index";
import Accessibility from "../../src/screens/Private/Accesibility";
import Help from "../../src/screens/Private/Help";
export type RootStackParamList = {
  BottomTab: TabParamList;
  Settings: undefined;
  Accessibility: undefined;
  GetHelp: undefined;
};
const RootStack = () => {
  const Root = createNativeStackNavigator<RootStackParamList>();

  return (
    <Root.Navigator>
      <Root.Screen
        name="BottomTab"
        options={{ headerShown: false }}
        component={PrivateNavigation}
      />
      <Root.Screen name="Settings" component={Settings} />
      <Root.Screen name="Accessibility" component={Accessibility} />
      <Root.Screen name="GetHelp" component={Help} />
    </Root.Navigator>
  );
};

export default RootStack;
