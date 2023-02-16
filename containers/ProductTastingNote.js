import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CarouselCardsDetails from "../components/carousel/CarouselCardsDetails";
import { supabase } from "../Supabase";

export default function ProductTastingNote(item) {
  const [notes, setNotes] = useState([]);
  console.log(item);
  const getNotes = async () => {
    let { data: notes, error } = await supabase
      .from("producttastingnotes")
      .select("*")
      .eq("product_name", item.prevPage);
    return notes;
  };

  useEffect(() => {
    getNotes().then((items) => {
      setNotes(items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CarouselCardsDetails data={notes} />
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
