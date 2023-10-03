import { StyleSheet, Text, TextComponent, View } from "react-native";
import React, { ReactNode } from "react";
import { typography } from "../../../constants/Typography";
type Heading2 = {
  children: ReactNode;
};
export type DefaultProps = Heading2 & Text["props"];

const Heading2 = (props: DefaultProps) => {
  const { children, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};

export default Heading2;

const styles = StyleSheet.create({
  text: {
    fontSize: typography.FONT_SIZE.L,
    fontFamily: "cereal-bold",
  },
});
