import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SliderCard from "./SliderCard";
import { sliderIcons } from "../../icons";
const Slider = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={[styles.sliderContainer, {flexDirection: 'column'}]} >
        <SliderCard sliderIcons={sliderIcons} />
        <SliderCard sliderIcons={sliderIcons} />
      </View>
    </ScrollView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
