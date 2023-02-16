import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import DoubleClick from "react-native-double-tap";
import navigationService from "../../NavigationService";
import GestureRecognizer from "react-native-swipe-gestures";

export const SLIDER_HEIGHT = Dimensions.get("window").height;
export const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.83);
export const SLIDER_WIDTH = Dimensions.get("window").width; //+80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH); //* 0.78

export default function CarouselCardItem({ item, index }) {
  const onSwipeLeft = (gestureState) => {
    navigationService.navigation.goBack();
  };

  const onSwipeRight = (gestureState) => {
    navigationService.navigation.goBack();
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
      key={index}
    >
      <DoubleClick
        doubleTap={() => {
          navigationService.navigation.navigate(item.next_page, {
            itemID: item.id,
            item: item,
          });
        }}
        delay={300}
      >
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.image}
          imageStyle={{ opacity: 0.8 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.header}>{item.title}</Text>
        </ImageBackground>
      </DoubleClick>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: 12.5,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center", //align title
    justifyContent: "center", //align title
  },
  header: {
    color: "white",
    fontSize: 78,
    textAlign: "center",
    lineHeight: 95,
    // backgroundColor: "rgba(0, 0, 0, 0.7)",
    // padding: 10,
    paddingHorizontal: 7,
    // alignSelf: "flex-start",
    // textShadowColor: "rgb(252, 249, 238, 1)",
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 5,
    fontFamily: "MinionProMedium",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
});
