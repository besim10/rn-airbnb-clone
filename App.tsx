import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PrivateNavigation from "./navigation/PrivateNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ThemeProvider from "./src/app/providers/ThemeProvider";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { User } from "firebase/auth";
import PublicNavigation from "./navigation/PublicNavigation";
import { StripeProvider } from "@stripe/stripe-react-native";
import { STRIPE_PUBLISHABLE_KEY } from "@env";
import { AuthenticationProvider } from "./src/app/providers/Authentication/AuthenticationProvider";
import RootStack from "./navigation/PrivateNavigation/RootStack";
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "cereal-normal": require("./assets/fonts/AirbnbCereal_W_Bk.otf"),
          "cereal-bold": require("./assets/fonts/AirbnbCereal_W_Md.otf"),
        });
        await new Promise((resolve: any) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);
  if (!fontLoaded) {
    return null;
  }
  return (
    <ThemeProvider>
      <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
        <SafeAreaProvider onLayout={onLayoutRootView}>
          <AuthenticationProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </AuthenticationProvider>
        </SafeAreaProvider>
      </StripeProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
