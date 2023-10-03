import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { ReactNode } from "react";
import { typography } from "../../constants/Typography";
import Heading3 from "../Typography/Heading3";
import useTheme from "../../hooks/useTheme";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
export type NavigationListItem = {
  id: number;
  icon: ReactNode;
  name: string;
  navigateTo: any;
};
interface INavigationList {
  data: NavigationListItem[];
}
const NavigationList = (props: INavigationList) => {
  const navigation = useNavigation();
  const { data } = props;
  const theme = useTheme();
  return (
    <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
      <FlatList
        bounces={false}
        data={data}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: theme.colors.TEXT_GRAY,
                width: "100%",
              }}
            />
          );
        }}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate(item.navigateTo);
              }}
              style={{
                paddingVertical: typography.LETTER_SPACING.small,
                flexDirection: "row",
                alignItems: "center",
                gap: typography.LETTER_SPACING.small,
              }}
            >
              {item.icon}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Heading3>{item.name}</Heading3>
                <Ionicons name="chevron-forward" size={24} color="black" />
              </View>
            </Pressable>
          );
        }}
      />
    </ScrollView>
  );
};

export default NavigationList;

const styles = StyleSheet.create({});
