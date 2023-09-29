import { Button, StyleSheet, Text, View } from "react-native";
import useTheme from "../../../hooks/useTheme";
import useThemedStyles from "../../../hooks/useThemedStyles";

const Explore = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <View style={style.body}>
      <Text>Explore Page</Text>
      <Button onPress={() => {}} color={theme.colors.BACKGROUND} title="test" />
    </View>
  );
};
const styles = (theme: any) =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: 20,
    },
  });
export default Explore;
