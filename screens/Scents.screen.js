import { StyleSheet, View } from "react-native";
import HeaderTab from "../components/HeaderTab";
import BrowseScents from "../containers/BrowseScents";

export default function Scents() {
  // const { globalState, setGlobalState } = useContext(MyContext);

  return (
    <View style={styles.container}>
      <HeaderTab title="scents" />
      <BrowseScents />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
