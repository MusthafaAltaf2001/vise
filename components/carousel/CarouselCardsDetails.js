import React, { useState, useEffect } from "react";
import Carousel from "react-native-snap-carousel-v4";
import CarouselCardItemDetails, {
  ITEM_HEIGHT,
  SLIDER_HEIGHT,
} from "./CarouselCardItemDetails";
import { useNavigation } from "@react-navigation/native";
import navigationService from "../../NavigationService";
import * as Speech from "expo-speech";

export default function CarouselCardsDetails({ data }) {
  const navigation = useNavigation();
  navigationService.navigation = navigation;

  const [index, setIndex] = useState(0);
  const isCarousel = React.useRef(null);

  if (data.length !== 0) {
    Speech.speak(data[index].voice);
  }

  return (
    <Carousel
      layout={"stack"}
      layoutCardOffset={`1`}
      ref={isCarousel}
      data={data}
      renderItem={CarouselCardItemDetails}
      sliderHeight={SLIDER_HEIGHT}
      itemHeight={ITEM_HEIGHT}
      onSnapToItem={(index) => setIndex(index)}
      useScrollView={true}
      vertical={true}
      disableIntervalMomentum={true}
      activeSlideOffset={100}
      activeSlideAlignment={"start"}
    ></Carousel>
  );
}
