import { StyleSheet, View, Text, StatusBar, FlatList } from "react-native";
import HeaderTab from "../components/HeaderTab";
import BrowseSubscents from "../containers/BrowseSubscents";
import { globalStateContext } from "../Store";

export default function Subscents({ route }) {
  const { itemID, item } = route.params;

  // const { product, setProduct } = useContext(globalStateContext);
  // setProduct({ item });

  // useEffect(() => {
  //   setProduct({ item });
  // }, [item]);

  // console.log("subscents page");
  // console.log(product);

  return (
    <View style={styles.container}>
      <HeaderTab title={item.title + " Products"} />
      <BrowseSubscents item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
