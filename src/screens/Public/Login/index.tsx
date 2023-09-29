import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import useTheme from "../../../../hooks/useTheme";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import { IThemeContextProps } from "../../../app/providers/ThemeProvider";
import { useCallback } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/PublicNavigation";
import { NavigationProp } from "@react-navigation/native";
interface RouterProps {
  navigation: NavigationProp<RootStackParamList, "Login">;
}
const LoginScreen = ({ navigation }: RouterProps) => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const onRegisterPressHandler = useCallback(() => {
    navigation.navigate("Register");
  }, []);
  return (
    <View style={style.root}>
      <TextInput placeholder="Username" style={style.inputContainer} />
      <TextInput
        keyboardType="visible-password"
        placeholder="Password"
        style={style.inputContainer}
      />
      <Button title="Log in" color={theme.colors.PRIMARY} />
      <Button
        title="Register"
        onPress={onRegisterPressHandler}
        color={theme.colors.TEXT}
      />
    </View>
  );
};
export default LoginScreen;

const styles = (theme: IThemeContextProps) =>
  StyleSheet.create({
    root: {
      flex: 1,
      padding: theme.typography.letterSpacing.base,
      backgroundColor: theme.colors.BACKGROUND,
      justifyContent: "center",
      // alignItems: "center",
    },
    inputContainer: {
      backgroundColor: "#afe",
      height: 56,
      borderColor: "#aaa",
      borderWidth: 1,
      borderRadius: 10,
      padding: theme.typography.letterSpacing.tiny,
    },
  });
