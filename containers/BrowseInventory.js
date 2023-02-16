import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import CarouselCards from "../components/carousel/CarouselCards";
import { globalStateContext } from "../Store";

export default function BrowseInventory() {
  const { purchaseHistory, setPurchaseHistory } =
    useContext(globalStateContext);

  // const [inventoryItems, setInventoryItems] = useState([]);

  // console.log(inventoryItems);

  const inventoryItems = [
    {
      image:
        "https://www.jomalone.com.my/media/export/cms/products/1000x1000/jo_sku_L00C01_1000x1000_0.png",
      next_page: "ProductDetails",
      title: "Grapefruit Cologne",
      voice: "Grapefruit Cologne. Double Tap to check out Grapefruit Cologne.",
    },
    {
      image:
        "https://www.jomalone.com.my/media/export/cms/products/1000x1000/jo_sku_L26L01_1000x1000_0.png",
      next_page: "ProductDetails",
      title: "English Pear & Freesia Cologne",
      voice:
        "English Pear & Freesia Cologne. Double Tap to check out English Pear & Freesia Cologne.",
    },
  ];

  console.log(inventoryItems);

  // const updateInventoryItems = () => {
  //   for (let i = 0; i < purchaseHistory.length; i++) {
  //     const purchaseHistoryCart = purchaseHistory[i].cart;
  //     for (let j = 0; j < purchaseHistoryCart.length; j++) {
  //       setInventoryItems((inventoryItems) => [
  //         ...inventoryItems,
  //         purchaseHistoryCart[j].item,
  //       ]);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   updateInventoryItems();
  // }, [purchaseHistory]);

  return (
    <View style={styles.container}>
      <CarouselCards data={inventoryItems} />
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
