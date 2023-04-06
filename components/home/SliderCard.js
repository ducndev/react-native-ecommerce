import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const SliderCard = ({ sliderIcons }) => {
  return (
    <View style={styles.sliderCardContainer}>
      {sliderIcons.map((icon, index) => (
        <View key={index} style={styles.sliderCard}>
          <View style={styles.sliderCardImage}>
            <Image
              source={{
                uri: icon.imageUrl,
              }}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <Text style={styles.sliderCardText}>{icon.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default SliderCard;

const styles = StyleSheet.create({
  sliderCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  sliderCard: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 100,
  },
  sliderCardImage: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  sliderCardText: {
    fontSize: 11,
    marginTop: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
