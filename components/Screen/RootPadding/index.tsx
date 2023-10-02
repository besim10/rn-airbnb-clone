import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { typography } from "../../../constants/Typography";
import { useTheme } from "@react-navigation/native";
interface IRootWrapper {
  children: ReactNode;
}
const RootWrapper = (props: IRootWrapper) => {
  const { children } = props;
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{ ...styles.root, backgroundColor: theme.colors.background }}
    >
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default RootWrapper;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: typography.LETTER_SPACING.base,
  },
});
