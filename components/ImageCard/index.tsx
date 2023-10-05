import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import ImagesCarousel from "../ImagesCarousel";
import Paragraph from "../Typography/Paragraph";
import { Ionicons } from "@expo/vector-icons";
import { typography } from "../../constants/Typography";
import useTheme from "../../hooks/useTheme";
import { differenceInDays } from "date-fns";
export interface ImageCarouselItem {
  id: number;
  uri: string;
  title: string;
}
export interface IPropertyInfo {
  city: string;
  state: string;
  distance: string;
  price: string;
  rating: number;
  startDate: Date;
  endDate: Date;
}
interface IImageCard {
  imagesData: ImageCarouselItem[];
  propertyInfo: IPropertyInfo;
}

const ImageCard = (props: IImageCard) => {
  const { imagesData, propertyInfo } = props;
  const theme = useTheme();
  const getNights = useCallback(() => {
    const {} = propertyInfo.startDate;
    const {
      propertyInfo: { startDate, endDate },
    } = props;
    return differenceInDays(startDate, endDate) - 1;
  }, []);
  return (
    <View style={styles.imageCardWrapper}>
      <ImagesCarousel data={imagesData} />
      <View style={{ marginTop: typography.LETTER_SPACING.tiny }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Paragraph mode="bold" color={theme.colors.TEXT}>
            {propertyInfo.city}, {propertyInfo.state}
          </Paragraph>
          <Paragraph color={theme.colors.TEXT}>
            <Ionicons name="star" size={14} color="black" />
            {propertyInfo.rating}
          </Paragraph>
        </View>
        <Paragraph>{propertyInfo.distance} kilometers away</Paragraph>
        <Paragraph>{propertyInfo.city} kilometers away</Paragraph>
        <Paragraph>{getNights()} nights</Paragraph>
        <Paragraph
          color={theme.colors.TEXT}
          style={{
            marginTop: typography.LETTER_SPACING.tiny,
            textDecorationLine: "underline",
            textDecorationColor: theme.colors.TEXT,
          }}
        >
          <Text style={{ fontFamily: typography.FONT_FAMILY["CEREAL-BOLD"] }}>
            {propertyInfo.price} CHF
          </Text>{" "}
          total before taxes
        </Paragraph>
      </View>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  imageCardWrapper: {
    // backgroundColor: "#afe",
  },
});
