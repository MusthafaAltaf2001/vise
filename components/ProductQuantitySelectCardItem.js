import { StyleSheet, View, Text, Button, ImageBackground } from "react-native";
import React, { useState, useNavigation } from "react";
import GestureRecognizer from "react-native-swipe-gestures";

export default function ProductQuantitySelectCardItem(productQuantity) {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://www.jomalone.com.my/media/export/cms/products/1000x1000/jo_sku_L00401_1000x1000_0.png",
        }}
        style={styles.image}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.overlay} />
        <View style={styles.textBox}>
          <Text style={styles.textNumber}>
            {productQuantity.productQuantity}
          </Text>
          <Text style={styles.textStatic}>BOTTLE(S)</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginTop: "7%",
  },
  image: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "75%",
    // margin: "100%",
  },
  textBox: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 0.7,
  },
  textNumber: {
    color: "white",
    fontSize: 88,
    fontFamily: "MinionProMedium",
  },
  textStatic: {
    color: "white",
    fontSize: 42,
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
