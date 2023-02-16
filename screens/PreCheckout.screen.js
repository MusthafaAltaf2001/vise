import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import HeaderTab from "../components/HeaderTab";
import { globalStateContext } from "../Store";
import BrowsePreCheckout from "../containers/BrowsePreCheckout";

export default function PreCheckoutScreen() {
  const { product, setProduct } = useContext(globalStateContext);

  return (
    <View style={styles.container}>
      <HeaderTab title="next step" />
      <BrowsePreCheckout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
