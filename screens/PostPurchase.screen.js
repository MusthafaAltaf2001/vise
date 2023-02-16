import { StyleSheet, View } from "react-native";
import { useContext, useEffect } from "react";
import HeaderTab from "../components/HeaderTab";
import { useNavigation } from "@react-navigation/native";
import BrowsePostCheckout from "../containers/BrowsePostCheckout";
import { globalStateContext } from "../Store";

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
    navigation.navigate("Home");
  };

  const automaticRedirectToHomepage = () => {
    setTimeout(() => {
      redirectToHome();
    }, 4000);
  };

  useEffect(() => {
    automaticRedirectToHomepage();
  }, []);

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
