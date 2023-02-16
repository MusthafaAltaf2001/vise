import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CarouselCards from "../components/carousel/CarouselCards";
import { globalStateContext } from "../Store";
import { supabase } from "../Supabase";

export default function BrowseProductDetails(item) {
  // const { product, setProduct } = useContext(globalStateContext);
  // console.log("product detials container");
  // console.log(product.item);
  // console.log(item.item.productDetails);

  const [productDetails, setProductDetails] = useState([]);
  const getProductDetails = async () => {
    let { data: productDetails, error } = await supabase
      .from("productdetails")
      .select("*");
    return productDetails;
  };

  useEffect(() => {
    getProductDetails().then((items) => {
      setProductDetails(items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CarouselCards data={productDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
