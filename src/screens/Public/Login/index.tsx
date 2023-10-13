import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import useTheme from "../../../../hooks/useTheme";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import { IThemeContextProps } from "../../../app/providers/ThemeProvider";
import { useCallback, useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/PublicNavigation";
import { NavigationProp } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
// import {
//   ADD_DOC,
//   COLLECTION,
//   FIREBASE_AUTH,
//   FIRESTORE_DB,
// } from "../../../firebase/config";
import {
  initPaymentSheet,
  presentPaymentSheet,
} from "@stripe/stripe-react-native";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
interface RouterProps {
  navigation: NavigationProp<RootStackParamList, "Login">;
}
const LoginScreen = ({ navigation }: RouterProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ready, setReady] = useState(false);
  const theme = useTheme();
  const auth = FIREBASE_AUTH;

  const style = useThemedStyles(styles);
  const onRegisterPressHandler = useCallback(() => {
    navigation.navigate("Register");
  }, []);
  const onLoginHandler = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  const onEmailChangeHandler = (value: string) => {
    setEmail(value);
  };
  const onPasswordChangeHandler = (value: string) => {
    setPassword(value);
  };

  const initialisePaymentSheet = async () => {
    const res = await ADD_DOC(
      COLLECTION(
        FIRESTORE_DB,
        `/users/REC5HU89tdS0x6Z4dWfApkxcoM03/checkout_sessions`
      ),
      { client: "mobile", mode: "payment", amount: 125, currency: "eur" }
    );

    if (res && res.id) {
      await listenToDocumentChange(res.id);
    }
  };
  const listenToDocumentChange = async (id: string) => {
    const docRef = doc(
      FIRESTORE_DB,
      "users",
      "REC5HU89tdS0x6Z4dWfApkxcoM03",
      "checkout_sessions",
      id
    );
    onSnapshot(docRef, async (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        if (data.paymentIntentClientSecret) {
          const { error } = await initPaymentSheet({
            merchantDisplayName: "Excample INC.",
            customerId: data.customer,
            customerEphemeralKeySecret: data.ephemeralKeySecret,
            paymentIntentClientSecret: data.paymentIntentClientSecret,
            returnURL: "stripe-example://stripe-redirect",
            allowsDelayedPaymentMethods: true,
          });
          try {
            console.log("HAHAHA");
            const { error } = await presentPaymentSheet({ timeout: 4000 });
          } catch (error) {
            console.log(error);
          }
          if (error) {
            console.log("error", error);
          }
        }
      } else {
        console.log("Oops, no such document!");
      }
    });
  };
  useEffect(() => {
    // initialisePaymentSheet();
  }, []);
  const onBuy = async () => {
    // // const { error } = await presentPaymentSheet();
    // if (error) {
    //   Alert.alert(`Error code: ${(error.code, error.message)}`);
    // } else {
    //   Alert.alert(`Success`, "The payment was confirmed succesfully ");
    //   setReady(true);
    // }
    initialisePaymentSheet();
  };
  return (
    <View style={style.root}>
      <TextInput
        onChangeText={onEmailChangeHandler}
        placeholder="Email"
        style={style.inputContainer}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        onChangeText={onPasswordChangeHandler}
        style={style.inputContainer}
      />
      <Button
        onPress={onLoginHandler}
        title="Log in"
        color={theme.colors.PRIMARY}
      />
      <Button
        title="Register"
        onPress={onRegisterPressHandler}
        color={theme.colors.TEXT}
      />
      <Button title="Buy" onPress={onBuy} color={theme.colors.ERROR} />
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
