import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DoubleClick from "react-native-double-tap";
import CarouselCards from "../components/carousel/CarouselCards";
import CheckoutComponent from "../components/CheckoutComponent";

export default function CheckoutPage() {
  return (
    <View style={styles.container}>
      <CheckoutComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
