import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { typography } from "../../../constants/Typography";
import useTheme from "../../../hooks/useTheme";

interface IRootWrapper {
  children: ReactNode;
}
const RootWrapper = (props: IRootWrapper) => {
  const { children } = props;
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{ ...styles.root, backgroundColor: theme.colors.BACKGROUND }}
    >
      <ScrollView style={styles.container}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default RootWrapper;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    padding: typography.LETTER_SPACING.base,
  },
});
