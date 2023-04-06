import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../datas";

const TodaySuggestion = () => {
  return (
    <View style={{ marginTop: 20, margin: 10, marginBottom: 300 }}>
      <Text
        style={{ fontSize: 18, textTransform: "uppercase", color: "#FA5252" }}
      >
        Gợi ý hôm nay
      </Text>
      <ProductCard products={products} />
    </View>
  );
};

export default TodaySuggestion;

const styles = StyleSheet.create({});
