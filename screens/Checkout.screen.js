import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import HeaderTab from "../components/HeaderTab";
import DoubleClick from "react-native-double-tap";
import { useNavigation } from "@react-navigation/native";
import CheckoutPage from "../containers/Checkout";
import { globalStateContext } from "../Store";

export default function Checkout() {
  const { userCart, setUserCart } = useContext(globalStateContext);
  // console.log(userCart);

  const navigation = useNavigation();

  const postPurchase = () => {
    navigation.navigate("PostCheckout");
  };

  // const onSwipeLeft = (gestureState) => {
  //   navigation.goBack();
  // };

  // const onSwipeRight = (gestureState) => {
  //   navigation.goBack();
  // };

  return (
    <View style={styles.container}>
      <HeaderTab title="Checkout" />
      <DoubleClick doubleTap={postPurchase} delay={300}>
        <CheckoutPage />
      </DoubleClick>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
