import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { typography } from "../../../constants/Typography";
import useTheme from "../../../hooks/useTheme";

interface IRootWrapper {
  children: ReactNode;
  scrollableView?: boolean;
}
const RootWrapper = (props: IRootWrapper) => {
  const { children, scrollableView } = props;
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{ ...styles.root, backgroundColor: theme.colors.BACKGROUND }}
    >
      {scrollableView ? (
        <ScrollView style={styles.container}>{children}</ScrollView>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
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
