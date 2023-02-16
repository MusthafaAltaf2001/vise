import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CarouselCards from "../components/carousel/CarouselCards";
import { supabase } from "../Supabase";

export default function ProductVolumeSelect(item) {
  const [productVol, setProductVol] = useState([]);

  const getProductVol = async () => {
    let { data: productVol, error } = await supabase
      .from("productvolume")
      .select("*");
    return productVol;
  };

  useEffect(() => {
    getProductVol().then((items) => {
      setProductVol(items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CarouselCards data={productVol} />
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
