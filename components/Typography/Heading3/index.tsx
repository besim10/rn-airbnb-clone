import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { typography } from "../../../constants/Typography";
type Heading3 = {
  children: ReactNode;
};
export type DefaultProps = Heading3 & Text["props"];
const Heading3 = (props: DefaultProps) => {
  const { children, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};

export default Heading3;

const styles = StyleSheet.create({
  text: {
    fontSize: typography.FONT_SIZE.M,
    fontFamily: "cereal-normal",
  },
});
