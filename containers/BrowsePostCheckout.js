import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native";

export default function BrowsePostCheckout() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://www.jomalone.com.my/media/export/cms/products/1000x1000/jo_sku_L00401_1000x1000_0.png",
        }}
        style={styles.image}
        imageStyle={{ opacity: 0.15 }}
      >
        <View style={styles.textBox}>
          <Text style={styles.textStatic}>Thank you for purchasing</Text>
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
    marginTop: "30%",
  },
  image: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "50%",
    margin: "5%",
  },
  textBox: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "35%",
  },
  textStatic: {
    textAlign: "center",
    fontSize: 50,
  },
});
