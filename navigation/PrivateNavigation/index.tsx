import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../../src/screens/Private/Explore";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Wishlist from "../../src/screens/Private/Wishlist";
import Profile from "../../src/screens/Private/Profile";
import Inbox from "../../src/screens/Private/Inbox";
import useTheme from "../../hooks/useTheme";
export type TabParamList = {
  Explore: undefined;
  Wishlist: undefined;
  Trips: undefined;
  Inbox: undefined;
  Profile: undefined;
};
const PrivateNavigation = () => {
  const Tab = createBottomTabNavigator<TabParamList>();

  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: theme.colors.PRIMARY }}
      initialRouteName="Explore"
    >
      <Tab.Screen
        name="Explore"
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
        component={Inbox}
        options={{
          title: "Inbox",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="chatbubble-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default PrivateNavigation;
