import { StyleSheet, View } from "react-native";
import HeaderTab from "../components/HeaderTab";
import { useNavigation } from "@react-navigation/native";
import ProductDescription from "../containers/ProductDescription";

export default function ProductDetailsDescription({ route }) {
  const navigation = useNavigation();
  const { itemID, item } = route.params;
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];
  const prevPage = prevRoute.params.item.title;

  return (
    <View style={styles.container}>
      <HeaderTab title="description" />
      <ProductDescription item={item} prevPage={prevPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
