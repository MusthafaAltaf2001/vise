import { StyleSheet, View } from "react-native";
import HeaderTab from "../components/HeaderTab";
import BrowseFeatures from "../containers/BrowseFeatures";

export default function Home() {
  return (
    <View style={styles.container}>
      <HeaderTab title="home" />
      <BrowseFeatures />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
