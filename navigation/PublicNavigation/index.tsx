import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../src/screens/Public/Login";
import RegisterScreen from "../../src/screens/Public/Register";
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};
const PublicNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
export default PublicNavigation;
