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
import { AuthenticationProvider } from "./src/app/providers/Authentication/AuthenticationProvider";
import RootStack from "./navigation/PrivateNavigation/RootStack";
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
          "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
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
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <AuthenticationProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </AuthenticationProvider>
      </SafeAreaProvider>
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
