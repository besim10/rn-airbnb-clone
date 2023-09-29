import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../src/screens/Explore";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const RootNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="tab"
        component={Explore}
        options={{
          title: "Explore",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-search-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default RootNavigation;
