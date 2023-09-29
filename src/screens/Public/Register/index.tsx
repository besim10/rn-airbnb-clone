//import liraries
import React, { Component, useCallback, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import useTheme from "../../../../hooks/useTheme";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../firebase/config";

// create a component
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = FIREBASE_AUTH;
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const onSubmitHandler = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log("Error", error);
    } finally {
    }
  };

  const onEmailChangeHandler = useCallback((value: string) => {
    setEmail(value);
  }, []);
  const onPasswordChangeHandler = useCallback((value: string) => {
    setPassword(value);
  }, []);
  return (
    <View style={style.container}>
      <TextInput
        value={email}
        onChangeText={onEmailChangeHandler}
        placeholder="Username"
        style={style.inputContainer}
      />
      <TextInput
        value={password}
        keyboardType="visible-password"
        placeholder="Password"
        onChangeText={onPasswordChangeHandler}
        style={style.inputContainer}
      />
      <Button title="Register" color={theme.colors.PRIMARY} />
      <Button
        title="Register"
        onPress={onSubmitHandler}
        color={theme.colors.TEXT}
      />
    </View>
  );
};

// define your styles
const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      // alignItems: "center",
      padding: theme.typography.letterSpacing.base,
      backgroundColor: "#2c3e50",
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

//make this component available to the app
export default RegisterScreen;
