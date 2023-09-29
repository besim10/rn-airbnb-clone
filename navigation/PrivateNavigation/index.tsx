import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../../src/screens/Private/Explore";
import React from "react";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Wishlist from "../../src/screens/Private/Wishlist";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const PrivateNavigation = () => {
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
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          title: "Wishlist",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Wishlist}
        options={{
          title: "Trips",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="locate-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Wishlist}
        options={{
          title: "Inbox",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="chatbubble-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Wishlist}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default PrivateNavigation;
