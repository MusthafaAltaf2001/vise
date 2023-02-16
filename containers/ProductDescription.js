import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CarouselCardsDetails from "../components/carousel/CarouselCardsDetails";
import { supabase } from "../Supabase";

export default function ProductDescription(item) {
  const [desc, setDesc] = useState([]);

  const getDesc = async () => {
    let { data: desc, error } = await supabase
      .from("productdescription")
      .select("*")
      .eq("product_name", item.prevPage);
    return desc;
  };

  useEffect(() => {
    getDesc().then((items) => {
      setDesc(items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CarouselCardsDetails data={desc} />
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
