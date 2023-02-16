import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CarouselCards from "../components/carousel/CarouselCards";
import { supabase } from "../Supabase";

export default function BrowseSubscents(item) {
  const [subscents, setSubscents] = useState([]);

  const getSubcents = async () => {
    let { data: subscents, error } = await supabase
      .from("subscents")
      .select("*")
      .eq("scent_family", item.item.title);
    return subscents;
  };

  useEffect(() => {
    getSubcents().then((items) => {
      setSubscents(items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CarouselCards data={subscents} />
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
