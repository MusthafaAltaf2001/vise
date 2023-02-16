import { StyleSheet, View } from "react-native";
import { useContext, useEffect } from "react";
import HeaderTab from "../components/HeaderTab";
import BrowseProductDetails from "../containers/BrowseProductDetails";
import { globalStateContext } from "../Store";

export default function ProductDetails({ route }) {
  const { itemID, item } = route.params;
  const { product, setProduct } = useContext(globalStateContext);
  useEffect(() => {
    setProduct({ item });
  }, [item]);

  return (
    <View style={styles.container}>
      {/* <HeaderTab title={item.title} />
       */}
      <HeaderTab title="Details" />
      <BrowseProductDetails item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
