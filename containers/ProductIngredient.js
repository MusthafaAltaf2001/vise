import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CarouselCardsDetails from "../components/carousel/CarouselCardsDetails";
import { supabase } from "../Supabase";

export default function ProductIngredient(item) {
  const [ing, setIng] = useState([]);

  const getIng = async () => {
    let { data: ing, error } = await supabase
      .from("productingredients")
      .select("*")
      .eq("product_name", item.prevPage);
    return ing;
  };

  useEffect(() => {
    getIng().then((items) => {
      setIng(items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CarouselCardsDetails data={ing} />
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
