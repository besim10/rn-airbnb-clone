import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { typography } from "../../../constants/Typography";
import useTheme from "../../../hooks/useTheme";

type IParagraph = {
  children: ReactNode;
};
export type DefaultProps = IParagraph & Text["props"];

const Paragraph = (props: DefaultProps) => {
  const { children, style } = props;
  const theme = useTheme();
  return (
    <View>
      <Text
        style={[
          { ...styles.paragraph, color: theme.colors.TEXT_SECONDARY },
          style,
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  paragraph: {
    fontSize: typography.FONT_SIZE.M,
    fontFamily: typography.FONT_FAMILY["CEREAL-NORMAL"],
  },
});
