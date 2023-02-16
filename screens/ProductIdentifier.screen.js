import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import DoubleClick from "react-native-double-tap";
import * as Speech from "expo-speech";
import { supabase } from "../Supabase";
import navigationService from "../NavigationService";

export default function ProductIdentifier() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productRow, setProductRow] = useState([]);

  const getProducts = async () => {
    let { data: products, error } = await supabase
      .from("productdescription")
      .select("product_name");
    return products;
  };

  const getProductRow = async (productName) => {
    let { data: productRow, error } = await supabase
      .from("subscents")
      .select("*")
      .eq("title", productName);
    return productRow;
  };

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  // useEffect(() => {
  //   getProductRow().then((productRow) => {
  //     setProductRow(productRow);
  //   });
  // }, []);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    Speech.speak(
      "We need your permission to show the camera. Double tap on the screen to grant access to the camera"
    );
    // Camera permissions are not granted yet
    return (
      <DoubleClick
        style={styles.doubleTapContainer}
        doubleTap={() => {
          requestPermission();
        }}
        delay={200}
      >
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>
            We need your permission to show the camera
          </Text>
        </View>
      </DoubleClick>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Identifying your product, please wait for a moment...
        </Text>
      </View>
    );
  }

  takePicture = () => {
    Speech.speak("Identifying your product...");
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  onPictureSaved = async (photo) => {
    setIsLoading(true);
    const SUBSCRIPTION_KEY = "ccf741eb4476462d91cd48c5f8b2ee74"; // THIS SHOULDNT BE EXPOSED LIKE THIS but oh well
    fetch(
      "https://eastasia.api.cognitive.microsoft.com/computervision/imageanalysis:analyze?features=Read&model-version=latest&language=en&api-version=2022-10-12-preview",
      {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY,
          "Content-Type": "application/octet-stream",
        },
        body: photo,
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        searchProduct(json.readResult);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  searchProduct = (scannedTextArray) => {
    for (let i = 0; i < products.length; i++) {
      if (
        matchProductArray(
          scannedTextArray.content.toLowerCase().split(/\s+/),
          products[i].product_name.toLowerCase().split(/\s+/)
        )
      ) {
        getProductRow(products[i].product_name).then((productRow) => {
          setProductRow(productRow);
          navigationService.navigation.navigate("ProductDetails", {
            itemID: productRow[0].id,
            item: productRow[0],
          });
          return Speech.speak("You are holding a " + products[i].product_name);
        });
      }
    }
    return Speech.speak(
      "It does not seem that you are holding any Jo Malone products."
    );
  };

  matchProductArray = (scannedTextArray, productsArray) => {
    const wordsToIgnore = ["jo", "malone", "&", "cologne"];
    let i = 0;
    while (i < scannedTextArray.length) {
      if (!wordsToIgnore.includes(scannedTextArray[i])) {
        for (let j = 0; j < productsArray.length; j++) {
          if (
            !wordsToIgnore.includes(scannedTextArray[i]) &&
            scannedTextArray[i] === productsArray[j]
          ) {
            return true;
          }
        }
      }
      i++;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <DoubleClick
        style={styles.doubleTapContainer}
        doubleTap={() => {
          takePicture();
        }}
        delay={200}
      >
        <Camera
          style={styles.camera}
          ref={(ref) => {
            this.camera = ref;
          }}
        />
      </DoubleClick>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingScreen: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "#707070",
    opacity: 0.9,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  doubleTapContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  camera: {
    flex: 1,
  },
});
