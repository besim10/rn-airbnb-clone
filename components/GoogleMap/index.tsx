import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Alert,
  Pressable,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "./mapStyle";
import { typography } from "../../constants/Typography";
const properties = [
  {
    id: 1,
    latitude: 41.3275,
    longitude: 19.8187,
    // title: "Property 1",
    // description: "Description for Property 1",
    price: 120,
    currency: "euro",
  },
  {
    id: 2,
    latitude: 42.3275,
    longitude: 20.8187,
    price: 140,
    // title: "Property 1",
    // description: "Description for Property 1",
  },
  // Add more properties here
];
export function GoogleMap() {
  return (
    <View style={styles.container}>
      <MapView
        userLocationPriority="high"
        showsUserLocation
        showsMyLocationButton
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 41.3275,
          longitude: 19.8187,
          latitudeDelta: 0.5, // You can adjust this value as needed for the zoom level
          longitudeDelta: 0.5, // You can adjust this value as needed for the zoom level
        }}
        mapType="standard"
      >
        {properties.map((property) => (
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
                  backgroundColor: "#fe2",
                  padding: typography.LETTER_SPACING.tiny,
                  borderRadius: typography.BORDER_RADIUS.M,
                }}
              >
                <Text>{property.price}</Text>
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
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});