import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageCard from "../ImageCard";
import { typography } from "../../constants/Typography";

interface IListingList {
  data: any;
}
const ListingList = (props: IListingList) => {
  const { data } = props;
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => <ImageCard data={item} />}
    />
  );
};

export default ListingList;

const styles = StyleSheet.create({});
