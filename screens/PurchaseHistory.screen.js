import { StyleSheet, View } from "react-native";
import HeaderTab from "../components/HeaderTab";
import React, { useContext } from "react";
import CarouselCards from "../components/carousel/CarouselCards";
import { globalStateContext } from "../Store";

export default function PurchaseHistory() {
  const { purchaseHistory, setPurchaseHistory } =
    useContext(globalStateContext);

  return (
    <View style={styles.container}>
      <HeaderTab />
      <View style={styles.carouselContainer}>
        <CarouselCards data={purchaseHistory} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FCF9EE",
  },
});
