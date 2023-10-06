import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import ImagesCarousel from "../ImagesCarousel";
import Paragraph from "../Typography/Paragraph";
import { Ionicons } from "@expo/vector-icons";
import { typography } from "../../constants/Typography";
import useTheme from "../../hooks/useTheme";
import { differenceInDays } from "date-fns";

export interface IPropertyInfo {
  city: string;
  state: string;
  distance: string;
  price: string;
  rating: number;
  startDate: Date;
  endDate: Date;
  images: string[];
}
interface IImageCard {
  data: IPropertyInfo;
}

const ImageCard = (props: IImageCard) => {
  const {
    data: { city, distance, endDate, images, price, rating, startDate, state },
  } = props;
  const theme = useTheme();

  // console.log(startDatee);
  const getNights = useCallback(() => {
    return differenceInDays(endDate, startDate);
  }, []);
  return (
    <View style={styles.imageCardWrapper}>
      <ImagesCarousel data={images} />
      <View style={{ marginTop: typography.LETTER_SPACING.tiny }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Paragraph mode="bold" color={theme.colors.TEXT}>
            {city}, {state}
          </Paragraph>
          <Paragraph color={theme.colors.TEXT}>
            <Ionicons name="star" size={14} color="black" />
            {rating}
          </Paragraph>
        </View>
        <Paragraph>{distance} kilometers away</Paragraph>
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
            {price} CHF
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
    margin: typography.LETTER_SPACING.base,
  },
});
