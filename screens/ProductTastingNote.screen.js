import { StyleSheet, View, Text, StatusBar, FlatList } from "react-native";
import React from "react";
import HeaderTab from "../components/HeaderTab";
import { useNavigation } from "@react-navigation/native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import ProductTastingNote from "../containers/ProductTastingNote";

export default function ProductTastingNoteScreen({ route }) {
  const navigation = useNavigation();
  const { itemID, item } = route.params;
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];
  const prevPage = prevRoute.params.item.title;

  const onSwipeLeft = (gestureState) => {
    navigation.goBack();
  };

  const onSwipeRight = (gestureState) => {
    navigation.goBack();
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipeLeft={(state) => onSwipeLeft(state)}
      onSwipeRight={(state) => onSwipeRight(state)}
      config={config}
      style={styles.container}
    >
      <HeaderTab title={"tasting notes"} />
      <ProductTastingNote item={item} prevPage={prevPage} />
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
