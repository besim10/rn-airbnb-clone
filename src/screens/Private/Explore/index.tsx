import {
  FlatList,
  StyleProp,
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import useTheme from "../../../../hooks/useTheme";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import { IThemeContextProps } from "../../../app/providers/ThemeProvider";
import { typography } from "../../../../constants/Typography";
import RootWrapper from "../../../../components/Screen/RootPadding";
import ImageCard, { IPropertyInfo } from "../../../../components/ImageCard";
import { useEffect, useState } from "react";
import { ADD_DOC, COLLECTION, FIRESTORE_DB } from "../../../firebase/config";
import { Timestamp, getDocs } from "firebase/firestore";
import ListingList from "../../../../components/ListingList";
import { Ionicons } from "@expo/vector-icons";
import { GoogleMap } from "../../../../components/GoogleMap";
interface IListingItem {
  uid: string;
  city: string;
  distance: string;
  price: string;
  rating: number;
  state: string;
  startDate: any;
  endDate: any;
  images: string[];
}

// const propertyInfo: IPropertyInfo = {
//   city: "Tirana",
//   distance: "10",
//   price: "12",
//   rating: 12.87,
//   state: "Albania",
//   startDate: new Date("2023-06-02"),
//   endDate: new Date("2023-06-10"),
//   // images: ["Feafa", "eafaefea"],
// };

const Explore = () => {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  // const style = useThemedStyles(styles);
  const [listings, setListing] = useState<IListingItem[]>([]);
  const getListings = async () => {
    const lisingList = COLLECTION(FIRESTORE_DB, "listings");
    try {
      const listingSnapshot = await getDocs(lisingList);

      const listingsList = listingSnapshot.docs.map((doc) => doc.data());
      const temporary: any[] = listingsList;
      setListing(temporary);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListings();
  }, []);
  const toggleModal = () => {
    setModalVisible((prevState) => !prevState);
  };
  const onSearchPressHandler = () => {
    toggleModal();
  };
  if (listings.length === 0) return;
  return (
    <View style={styles.root}>
      <View
        style={{
          paddingTop: 56,
          paddingHorizontal: typography.LETTER_SPACING.base,
        }}
      >
        <TouchableOpacity onPress={onSearchPressHandler}>
          <View
            style={{
              height: 56,
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 5,
              borderRadius: typography.BORDER_RADIUS.XXL,
              width: "100%",
              borderWidth: 1,
              paddingHorizontal: typography.LETTER_SPACING.base,
              flexDirection: "row",
            }}
          >
            <Ionicons name="search" size={20} color="black" />
            <Text>Where to?</Text>
          </View>
        </TouchableOpacity>
      </View>
      <GoogleMap />
      {/* <ListingList data={listings} />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <SafeAreaView
          style={{
            flex: 1,
          }}
        ></SafeAreaView>
      </Modal> */}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Explore;
