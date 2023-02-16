import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CarouselCards from "../components/carousel/CarouselCards";
import { supabase } from "../Supabase";

export default function BrowseMenu() {
  const [features, setFeatures] = useState([]);

  const getFeatures = async () => {
    let { data: features, error } = await supabase.from("features").select("*");
    return features;
  };

  useEffect(() => {
    getFeatures().then((features) => {
      setFeatures(features);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CarouselCards data={features} />
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
