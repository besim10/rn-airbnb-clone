import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Alert,
  Pressable,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { mapStyle } from "./mapStyle";
import { typography } from "../../constants/Typography";
import { BoxShadowStyle } from "../../src/styles/Common/BoxShadow";
import useTheme from "../../hooks/useTheme";
interface Iproperty {
  id: number;
  latitude: number;
  longitude: number;
  price: number;
}
const properties = [
  {
    id: 1,
    latitude: 41.3275,
    longitude: 19.8187,
    latitudeDelta: 1, // You can adjust this value as needed for the zoom level
    price: 120,
  },
  {
    id: 2,
    latitude: 42.3275,
    longitude: 20.8187,
    latitudeDelta: 1, // You can adjust this value as needed for the zoom level
    price: 140,
  },
  {
    id: 3,
    latitude: 42.98506319740943,
    longitude: 21.57212683930993,
    price: 240,
  },
  {
    id: 4,
    latitude: 44.32007571700413,
    longitude: 22.31869976967573,
    price: 800,
  },
  {
    id: 5,
    latitude: 38.29137708474508,
    longitude: 17.318698726594448,
    price: 1000,
  },
  // Add more properties here
];
const initialRegion = {
  latitude: 41.3275,
  longitude: 19.8187,
  latitudeDelta: 5, // You can adjust this value as needed for the zoom level
  longitudeDelta: 5, // You can adjust this value as needed for the zoom level
};
export function GoogleMap() {
  const [markers, setMarkers] = useState<Iproperty[]>(properties);
  const theme = useTheme();
  const mvRef = useRef<MapView>(null);
  useEffect(() => {
    const generatedArray = new Array(50).fill(null).map((x, i) => {
      return {
        id: i + 1,
        latitute:
          initialRegion.latitude +
          (Math.random() - 0.5) * initialRegion.latitudeDelta,
        longitute:
          initialRegion.longitude +
          (Math.random() - 0.5) * initialRegion.longitudeDelta,
        price: i + 1,
      };
    });
    // setMarkers(properties);
  }, []);
  console.log("CurrentMarkers", markers);
  return (
    <View style={styles.container}>
      <MapView
        ref={mvRef}
        userLocationPriority="high"
        showsUserLocation
        showsMyLocationButton
        loadingEnabled
        onRegionChangeComplete={(data, details) => {
          const bounding = mvRef.current?.boundingBoxForRegion(data);
          console.log("Bounding", bounding);
          let copyOfMarkers = properties;
          copyOfMarkers = copyOfMarkers.filter(
            (item) =>
              bounding.northEast.latitude >= item.latitude &&
              bounding.southWest.latitude <= item.latitude &&
              bounding.northEast.longitude >= item.longitude &&
              bounding.southWest.longitude <= item.longitude
          );
          console.log("COPYOFMARKERS", copyOfMarkers);
          setMarkers(copyOfMarkers);
          // console.log(data);
          // console.log(details);
        }}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={initialRegion}
        mapType="standard"
      >
        {markers.map((property) => (
          <Pressable key={property.id}>
            <Marker
              coordinate={{
                latitude: property.latitude,
                longitude: property.longitude,
              }}
              onPress={() => {
                Alert.alert("Test");
              }}
              //   title={property.title}
              //   description={property.description}
            >
              <View
                style={{
                  ...BoxShadowStyle.container,
                  backgroundColor: theme.colors.WHITE,
                  padding: typography.LETTER_SPACING.tiny,
                  borderRadius: typography.BORDER_RADIUS.L,
                  overflow: "hidden",
                  borderWidth: 1,
                  borderColor: theme.colors.TEXT_GRAY,
                }}
              >
                <Text
                  style={{ fontFamily: typography.FONT_FAMILY["CEREAL-BOLD"] }}
                >
                  € {property.price}
                </Text>
              </View>
            </Marker>
          </Pressable>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});
