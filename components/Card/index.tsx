import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { typography } from "../../constants/Typography";
import useTheme from "../../hooks/useTheme";
import { BoxShadowStyle } from "../../src/styles/Common/BoxShadow";
interface ICard {
  children: ReactNode;
}
export type DefaultProps = ICard & Text["props"];
const Card = (props: DefaultProps) => {
  const { children, style } = props;
  const theme = useTheme();
  return (
    <View
      style={[
        {
          ...styles.cardContainer,
          shadowColor: theme.colors.TEXT_SECONDARY,
          backgroundColor: theme.colors.WHITE,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: typography.BORDER_RADIUS.L,
    padding: typography.LETTER_SPACING.base,
    ...BoxShadowStyle.container,
  },
});
