import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Heading1 from "../../../../components/Typography/Heading1";
import { typography } from "../../../../constants/Typography";
import Heading3 from "../../../../components/Typography/Heading3";

import RootPadding from "../../../../components/Screen/RootPadding";
import RootWrapper from "../../../../components/Screen/RootPadding";
import useTheme from "../../../../hooks/useTheme";
import Button from "../../../../components/Button";

const Profile = ({ navigation, route }: any) => {
  const theme = useTheme();
  return (
    <RootWrapper>
      <Heading1 style={{}}>Profile</Heading1>
      <Heading3
        style={[styles.heading3, { color: theme.colors.TEXT_SECONDARY }]}
      >
        Log in to start planning your next trip.
      </Heading3>
      <View style={{ marginTop: 100 }}>
        <Button
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          Log in
        </Button>
      </View>
    </RootWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  heading3: {
    marginTop: 10,
  },
});
