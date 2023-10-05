import {
  Button,
  StyleProp,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import { Image } from "expo-image";
import useTheme from "../../../../hooks/useTheme";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import { IThemeContextProps } from "../../../app/providers/ThemeProvider";
import PagerView from "react-native-pager-view";
import { typography } from "../../../../constants/Typography";
import RootWrapper from "../../../../components/Screen/RootPadding";
import ImageCard, { IPropertyInfo } from "../../../../components/ImageCard";
interface ImageCarouselItem {
  id: number;
  uri: string;
  title: string;
}
const data: ImageCarouselItem[] = [
  {
    id: 0,
    uri: "https://images.unsplash.com/photo-1607326957431-29d25d2b386f",
    title: "Dahlia",
  }, // https://unsplash.com/photos/Jup6QMQdLnM
  {
    id: 1,
    uri: "https://images.unsplash.com/photo-1512238701577-f182d9ef8af7",
    title: "Sunflower",
  }, // https://unsplash.com/photos/oO62CP-g1EA
  {
    id: 2,
    uri: "https://images.unsplash.com/photo-1627522460108-215683bdc9f6",
    title: "Zinnia",
  }, // https://unsplash.com/photos/gKMmJEvcyA8
  {
    id: 3,
    uri: "https://images.unsplash.com/photo-1587814213271-7a6625b76c33",
    title: "Tulip",
  }, // https://unsplash.com/photos/N7zBDF1r7PM
  {
    id: 4,
    uri: "https://images.unsplash.com/photo-1588628566587-dbd176de94b4",
    title: "Chrysanthemum",
  }, // https://unsplash.com/photos/GsGZJMK0bJc
  {
    id: 5,
    uri: "https://images.unsplash.com/photo-1501577316686-a5cbf6c1df7e",
    title: "Hydrangea",
  }, // https://unsplash.com/photos/coIBOiWBPjk
];
const propertyInfo: IPropertyInfo = {
  city: "Tirana",
  distance: "10",
  price: "12",
  rating: 12.87,
  state: "Albania",
  startDate: new Date("2023-06-02"),
  endDate: new Date("2023-06-02"),
};
const Explore = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <RootWrapper>
      <ImageCard imagesData={data} propertyInfo={propertyInfo} />
    </RootWrapper>
  );
};
const styles = (theme: IThemeContextProps) => StyleSheet.create({});

export default Explore;
