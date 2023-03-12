import React from "react";
import { StyleSheet, View } from "react-native";
import CarouselCards from "../components/carousel/CarouselCards";

export default function BrowsePreCheckout() {
  const preCheckoutOptions = [
    {
      title: "Continue Checkout",
      image:
        "https://www.jomalone.com.my/media/export/cms/products/1000x1000/jo_sku_L2CL01_1000x1000_0.png",
      next_page: "Checkout",
      voice: "Continue Checkout. Double tap to continue checkout"
    },
    {
      title: "Browse more products",
      image:
        "https://www.jomalone.com.my/media/export/cms/products/1000x1000/jo_sku_L2CL01_1000x1000_0.png",
      next_page: "Scents",
      voice: "Browse More Products. Double tap to browse more products"
    },
  ];

  return (
    <View style={styles.container}>
      <CarouselCards data={preCheckoutOptions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
