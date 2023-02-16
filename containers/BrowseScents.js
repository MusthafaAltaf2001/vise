import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CarouselCards from "../components/carousel/CarouselCards";
import { supabase } from "../Supabase";

export default function BrowseScents() {
  const [scents, setScents] = useState([]);

  const getScents = async () => {
    let { data: scents, error } = await supabase.from("scents").select("*");
    return scents;
  };

  useEffect(() => {
    getScents().then((items) => {
      setScents(items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CarouselCards data={scents} />
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
