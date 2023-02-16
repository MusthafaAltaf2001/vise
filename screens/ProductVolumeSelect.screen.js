import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import HeaderTab from "../components/HeaderTab";
import ProductVolumeSelect from "../containers/ProductVolumeSelect";
import { globalStateContext } from "../Store";

export default function ProductVolumeSelectScreen() {
  const { product, setProduct } = useContext(globalStateContext);

  return (
    <View style={styles.container}>
      <HeaderTab title="volume" />
      <ProductVolumeSelect item={product.item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
