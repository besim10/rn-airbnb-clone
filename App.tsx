import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation";
import ThemeProvider from "./src/app/providers/ThemeProvider";
export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
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
