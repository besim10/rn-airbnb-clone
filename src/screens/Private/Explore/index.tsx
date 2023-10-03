import { Button, StyleProp, StyleSheet, Text, View } from "react-native";
import useTheme from "../../../../hooks/useTheme";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import { IThemeContextProps } from "../../../app/providers/ThemeProvider";

const Explore = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <View style={style.body}>
      <Text style={style.test}>Explore Page</Text>

      <Button
        onPress={() => {
          theme.toggleTheme();
        }}
        color={theme.colors.PRIMARY}
        title="test"
      />
    </View>
  );
};
const styles = (theme: IThemeContextProps) =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: 20,
    },
    test: {
      padding: 20,
      backgroundColor: "red",
    },
    viewPager: {
      flex: 1,
    },
    page: {
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default Explore;
