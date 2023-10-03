import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { typography } from "../../../constants/Typography";
type Heading4 = {
  children: ReactNode;
};
export type DefaultProps = Heading4 & Text["props"];
const Heading4 = (props: DefaultProps) => {
  const { children, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};

export default Heading4;

const styles = StyleSheet.create({
  text: {
    fontSize: typography.FONT_SIZE.S,
    fontFamily: "cereal-normal",
  },
});
