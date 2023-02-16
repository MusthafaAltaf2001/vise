import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import HeaderTab from "../components/HeaderTab";
import ProductQuantitySelect from "../containers/ProductQuantitySelect";
import GestureRecognizer from "react-native-swipe-gestures";
import DoubleClick from "react-native-double-tap";
import { globalStateContext } from "../Store";

export default function ProductQuantitySelectScreen({ route, navigation }) {
  const product = route.params.item;
  // console.log(JSON.stringify(product, null, 2));
  const { userCart, setUserCart } = useContext(globalStateContext);

  const [productQuantity, setProductQuantity] = useState(1);

  const onSwipeUp = (gestureState) => {
    if (productQuantity < 50) {
      setProductQuantity(productQuantity + 1);
    }
  };

  const onSwipeDown = (gestureState) => {
    console.log(productQuantity);
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const onSwipeLeft = (gestureState) => {
    navigation.goBack();
  };

  const onSwipeRight = (gestureState) => {
    navigation.goBack();
  };

  const navigateToCheckout = () => {
    const newItem = {
      item: product,
      quantity: productQuantity,
    };
    setUserCart((userCart) => [...userCart, newItem]);
    navigation.navigate("PreCheckout");
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipeLeft={(state) => onSwipeLeft(state)}
      onSwipeRight={(state) => onSwipeRight(state)}
      onSwipeUp={(state) => onSwipeUp(state)}
      onSwipeDown={(state) => onSwipeDown(state)}
      config={config}
      style={styles.container}
    >
      <View>
        <HeaderTab title="quantity" />
        <DoubleClick doubleTap={navigateToCheckout} delay={300}>
          <ProductQuantitySelect productQuantity={productQuantity} />
        </DoubleClick>
      </View>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});
