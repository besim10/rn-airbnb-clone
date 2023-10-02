import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { ReactNode } from "react";
import useTheme from "../../hooks/useTheme";
import { typography } from "../../constants/Typography";
interface IButton {
  children: ReactNode;
  onPress: () => void;
}
const Button = (props: IButton) => {
  const { children, onPress } = props;
  const theme = useTheme();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          { backgroundColor: theme.colors.PRIMARY },
          styles.buttonContainer,
        ]}
      >
        <Text
          style={{
            fontSize: typography.FONT_SIZE.M,
            textAlign: "center",
            color: theme.colors.BACKGROUND,
          }}
        >
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: typography.LETTER_SPACING.base,
    paddingVertical: typography.LETTER_SPACING.small,
    borderRadius: typography.BORDER_RADIUS.M,
  },
});
