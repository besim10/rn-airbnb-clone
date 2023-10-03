import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Heading1 from "../../../../components/Typography/Heading1";
import { typography } from "../../../../constants/Typography";
import Heading2 from "../../../../components/Typography/Heading2";
import RootWrapper from "../../../../components/Screen/RootPadding";
import useTheme from "../../../../hooks/useTheme";
import Button from "../../../../components/Button";
import Card from "../../../../components/Card";
import TEST from "../../../../assets/images/apartment-img.svg";
import Paragraph from "../../../../components/Typography/Paragraph";
import NavigationList, {
  NavigationListItem,
} from "../../../../components/NavigationList";
import { Ionicons } from "@expo/vector-icons";
import Heading3 from "../../../../components/Typography/Heading3";
const SettingIcon = (
  <Ionicons name="settings-outline" size={24} color="black" />
);
const AccessibiltyIcon = (
  <Ionicons name="body-outline" size={24} color="black" />
);
const HelpIcon = (
  <Ionicons name="help-circle-outline" size={24} color="black" />
);
const navigationListData: NavigationListItem[] = [
  { id: 1, icon: SettingIcon, name: "Settings", navigateTo: "Settings" },
  {
    id: 2,
    icon: AccessibiltyIcon,
    name: "Accessibility",
    navigateTo: "Accessibility",
  },
  { id: 3, icon: HelpIcon, name: "Get help", navigateTo: "GetHelp" },
];
const Profile = ({ navigation, route }: any) => {
  const theme = useTheme();
  const renderSVG = () => {
    const SVGComponent = TEST;
    if (!SVGComponent) {
      return null;
    }
    return (
      <View style={{ width: 50, height: 50 }}>
        <SVGComponent />
      </View>
    );
  };
  return (
    <RootWrapper>
      <Heading1>Profile</Heading1>
      <Heading2
        style={[styles.heading3, { color: theme.colors.TEXT_SECONDARY }]}
      >
        Log in to start planning your next trip.
      </Heading2>
      <View style={{ marginTop: typography.LETTER_SPACING.large }}>
        <Button
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          Log in
        </Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
          marginTop: typography.LETTER_SPACING.small,
        }}
      >
        <Paragraph>Don't have an account?</Paragraph>
        <Text
          style={{
            fontFamily: typography.FONT_FAMILY["CEREAL-BOLD"],
            fontSize: typography.FONT_SIZE.M,
            textDecorationLine: "underline",
          }}
        >
          Sign up
        </Text>
      </View>
      <Card style={styles.card}>
        <View style={styles.textContainer}>
          <Heading2
            style={{ fontFamily: typography.FONT_FAMILY["CEREAL-BOLD"] }}
          >
            Airbnb your place
          </Heading2>
          <Paragraph style={{ marginTop: typography.LETTER_SPACING.tiny }}>
            It's simple to get set up and start earning.
          </Paragraph>
        </View>
        <View style={styles.imageContainer}>{renderSVG()}</View>
      </Card>
      <View
        style={{
          marginTop: typography.LETTER_SPACING.base,
          width: "100%",
        }}
      >
        <NavigationList data={navigationListData} />
      </View>
    </RootWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  heading3: {
    marginTop: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: typography.LETTER_SPACING.base,
  },
  textContainer: {
    width: "70%",
  },
  imageContainer: {
    width: "30%",
    alignItems: "center",
  },
});
