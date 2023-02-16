import React, { useState, useNavigation } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import ProductQuantitySelectCardItem from "../components/ProductQuantitySelectCardItem";
import GestureRecognizer from "react-native-swipe-gestures";

export default function ProductQuantitySelect(productQuantity) {
  return (
    <View style={styles.container}>
      <ProductQuantitySelectCardItem
        productQuantity={productQuantity.productQuantity}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
