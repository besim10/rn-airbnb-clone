import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { typography } from "../../constants/Typography";
interface IImagesCarousel {
  data: string[];
}
const window = Dimensions.get("window");
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
const ImagesCarousel = (props: IImagesCarousel) => {
  const { data } = props;
  return (
    <View
      style={{
        borderRadius: 20,

        overflow: "hidden",
      }}
    >
      <FlatList
        horizontal={true}
        pagingEnabled
        data={data}
        indicatorStyle="white"
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <Image
              style={{
                width: window.width - typography.LETTER_SPACING.base * 2,
                height: window.width - typography.LETTER_SPACING.base,
                overflow: "hidden",
              }}
              source={{ uri: item }}
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
            />
          );
        }}
      />
    </View>
  );
};

export default ImagesCarousel;
