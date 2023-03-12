import { View, StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import DoubleClick from "react-native-double-tap";
import { useNavigation } from "@react-navigation/native";
import { globalStateContext } from "../Store";
import * as Speech from "expo-speech";


export default function CheckoutComponent() {
  const { userCart, setUserCart } = useContext(globalStateContext);
  const giftWrap = "Free";
  const delivery = "Free";
  let estimatedTotal = 0;

  for (let i = 0; i < userCart.length; i++) {
    const currentItemPrice = userCart[i].item.price;
    estimatedTotal +=
      +currentItemPrice.replace(/\D/g, "") * userCart[i].quantity;
  }

  Speech.stop()
  Speech.speak(`Your estimated total is ${estimatedTotal} Malaysian Ringgit. Double tap to confirm your purchase.`)

  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        <Text style={styles.outerContainerText}>Estimated Total</Text>
        <Text style={styles.outerContainerText}>RM{estimatedTotal}.00</Text>
        <View style={styles.innerContainer}>
          <View style={styles.innerContainerItem}>
            <Text style={styles.innerContainerText}>SUBTOTAL</Text>
            <Text style={styles.innerContainerText}>RM{estimatedTotal}.00</Text>
          </View>
          <View style={styles.innerContainerItem}>
            <Text style={styles.innerContainerText}>GIFT WRAP</Text>
            <Text style={styles.innerContainerText}>{giftWrap}</Text>
          </View>
          <View style={styles.innerContainerItem}>
            <Text style={styles.innerContainerText}>DELIVERY</Text>
            <Text style={styles.innerContainerText}>{delivery}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    backgroundColor: "#E6E6E6",
    height: "100%",
    marginTop: "30%",
  },
  outerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "10%",
  },
  outerContainerText: {
    fontSize: 32,
    fontFamily: "TrajanProBold",
  },
  innerContainer: {
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 40,
    marginVertical: "5%",
  },
  innerContainerItem: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "5%",
  },
  innerContainerText: {
    fontSize: 30,
    fontFamily: "TrajanProBold",
  },
});
