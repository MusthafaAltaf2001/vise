import { StyleSheet, View } from "react-native";
import { useContext, useEffect } from "react";
import HeaderTab from "../components/HeaderTab";
import { useNavigation } from "@react-navigation/native";
import BrowsePostCheckout from "../containers/BrowsePostCheckout";
import { globalStateContext } from "../Store";
import * as Speech from "expo-speech";


export default function PostCheckout() {
  const navigation = useNavigation();

  const { purchaseHistory, setPurchaseHistory, userCart, setUserCart } =
    useContext(globalStateContext);

  const redirectToHome = () => {
    const today = new Date();
    const dateString = today.toLocaleString([], { month: "long" });
    const purchaseHistoryItem = {
      title: dateString,
      image: "https://www.instagram.com/p/BSV9Zs8BJmX/media/?size=l",
      next_page: "",
      cart: userCart,
    };
    setPurchaseHistory((purchaseHistory) => [
      ...purchaseHistory,
      purchaseHistoryItem,
    ]);
    setUserCart([]);
    Speech.stop()
    navigation.navigate("Home");
  };

  const automaticRedirectToHomepage = () => {
    setTimeout(() => {
      redirectToHome();
    }, 6000);
  };

  // useEffect(() => {
  //   automaticRedirectToHomepage();
  // }, []);

  automaticRedirectToHomepage();
  Speech.stop()
  Speech.speak("Thank you for purchasing from Jo Malone London. You will now be redirected to the homepage")


  return (
    <View style={styles.container}>
      <HeaderTab />
      <BrowsePostCheckout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
