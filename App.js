import React, { createContext, useState, useEffect, useMemo } from "react";
import { SafeAreaView, StyleSheet, LogBox } from "react-native";
import Home from "./screens/Home.screen";
import ProductIdentifier from "./screens/ProductIdentifier.screen";
import Scents from "./screens/Scents.screen";
import Subscents from "./screens/Subscents.screen";
import * as SplashScreen from "expo-splash-screen";
import * as Speech from "expo-speech";
import { globalStateContext } from "./Store";
import ProductDetails from "./screens/ProductDetails.screen";
import ProductVolumeSelectScreen from "./screens/ProductVolumeSelect.screen";
import ProductQuantitySelectScreen from "./screens/ProductQuantitySelect.screen";
import PreCheckoutScreen from "./screens/PreCheckout.screen";
import ProductDetailsDescription from "./screens/ProductDetailsDescription.screen";
import ProductIngredientScreen from "./screens/ProductIngredient.screen";
import ProductTastingNoteScreen from "./screens/ProductTastingNote.screen";
import Checkout from "./screens/Checkout.screen";
import PurchaseHistory from "./screens/PurchaseHistory.screen";
import PostCheckout from "./screens/PostPurchase.screen";

//tell React that we will implement a navigator
import { NavigationContainer, useNavigation } from "@react-navigation/native";

//create a stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationService from "./NavigationService";
import Inventory from "./screens/Inventory.screen";

import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  const screenOptions = {
    headerShown: false,
  };

  // setTimeout(SplashScreen.hideAsync, 4000);
  // SplashScreen.preventAutoHideAsync();
  // Speech.speak("ONE BOTTLE, DOUBLE TAP TO SELECT ONE BOTTLE");
  // Speech.speak("Continue Checkout, Double Tap to proceed to checkout");
  // Speech.speak("your estimated total is R M 450, double tap to proceed");
  // Speech.speak("your order has been confirmed, thank you for purchasing");

  //To be changed to 120 for production
  const inactivityTimerStart = 100;

  const [product, setProduct] = useState(null);
  const [userCart, setUserCart] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [firstTime, setFirstTime] = useState(true);

  const firstTimeInstructions = () => {
    if (firstTime) {
      // const firstTimeWelcome =
      //   "Hello and welcome, to the Jo Malone shopping experience app.";
      // const swipeUpAndDownGestureInstruction =
      //   "You can swipe up, or down from the center of your screen, to browse different menus and products.";
      // const swipeLeftAndRightInstruction =
      //   "You can swipe left, or right from the center of your screen to go to the previous screen.";
      // const doubleTapToSelectMenuItem =
      //   "You can double tap, on the center of your screen to enter into the menu item.";
      // Speech.speak(firstTimeWelcome);
      // Speech.speak(swipeUpAndDownGestureInstruction);
      // Speech.speak(swipeLeftAndRightInstruction);
      // Speech.speak(doubleTapToSelectMenuItem);
      setFirstTime(false);
    }
  };

  ///////Inactivity timer implementation
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (Date.now() - lastInteraction > 10000) {
  //       // Log user as inactive after 10 seconds of inactivity
  //       requestToHelpUser();
  //     }
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [lastInteraction]);

  // const requestToHelpUser = () => {
  //   const helpUserText =
  //     "We noticed some inactivity and we probably think you may be stuck. We will redirect you to the Homepage and help you out with a tutorial";
  //   Speech.speak(helpUserText);
  //   handleInteraction();
  //   setFirstTime(false);
  //   navigationService.navigation.navigate("Home");
  // };

  // const handleInteraction = () => {
  //   setLastInteraction(Date.now());
  // };

  const [trajanProBoldLoaded] = useFonts({
    TrajanProBold: require("./assets/fonts/TrajanPro-Bold.otf"),
  });

  const [trajanProRegularLoaded] = useFonts({
    TrajanProRegular: require("./assets/fonts/TrajanPro-Regular.ttf"),
  });

  const [MinionProMediumLoaded] = useFonts({
    MinionProMedium: require("./assets/fonts/MinionPro-Medium.otf"),
  });

  if (
    !trajanProBoldLoaded ||
    !trajanProRegularLoaded ||
    !MinionProMediumLoaded
  ) {
    return null;
  }

  firstTimeInstructions();

  return (
    <globalStateContext.Provider
      value={{
        product,
        setProduct,
        userCart,
        setUserCart,
        purchaseHistory,
        setPurchaseHistory,
      }}
    >
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Scents" component={Scents} />
            <Stack.Screen name="Subscents" component={Subscents} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen
              name="ProductDetailsDescription"
              component={ProductDetailsDescription}
            />
            <Stack.Screen
              name="ProductIngredient"
              component={ProductIngredientScreen}
            />
            <Stack.Screen
              name="ProductTastingNote"
              component={ProductTastingNoteScreen}
            />
            <Stack.Screen
              name="ProductVolumeSelect"
              component={ProductVolumeSelectScreen}
            />
            <Stack.Screen
              name="ProductQuantitySelect"
              component={ProductQuantitySelectScreen}
            />
            <Stack.Screen name="PreCheckout" component={PreCheckoutScreen} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="PurchaseHistory" component={PurchaseHistory} />
            <Stack.Screen name="PostCheckout" component={PostCheckout} />
            <Stack.Screen
              name="ProductIdentifier"
              component={ProductIdentifier}
            />
            <Stack.Screen name="Inventory" component={Inventory} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </globalStateContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EE",
  },
});

export default App;
