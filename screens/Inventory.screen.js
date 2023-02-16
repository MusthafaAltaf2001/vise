import { StyleSheet, View } from "react-native";
import HeaderTab from "../components/HeaderTab";
import BrowseInventory from "../containers/BrowseInventory";

export default function Inventory() {
  return (
    <View style={styles.container}>
      <HeaderTab title="Inventory" />
      <BrowseInventory />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
