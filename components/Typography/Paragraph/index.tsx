import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { typography } from "../../../constants/Typography";
import useTheme from "../../../hooks/useTheme";
import { colors } from "../../../constants/Colors";

type IParagraph = {
  children: ReactNode;
  mode?: "bold" | "regular";
  color?: string;
};
export type DefaultProps = IParagraph & Text["props"];

const Paragraph = (props: DefaultProps) => {
  const { children, style, mode = "regular", color } = props;
  const theme = useTheme();
  return (
    <View>
      <Text
        style={[
          {
            ...styles.paragraph,
            fontFamily:
              mode === "bold"
                ? typography.FONT_FAMILY["CEREAL-BOLD"]
                : typography.FONT_FAMILY["CEREAL-NORMAL"],
            color: color ? color : theme.colors.TEXT_SECONDARY,
          },
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
  },
});
