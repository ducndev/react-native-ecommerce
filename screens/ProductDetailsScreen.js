import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductDetailsHeader from "../components/productDetails/ProductDetailsHeader";
import { useRoute } from "@react-navigation/native";
import ProductDetailsFooter from "../components/productDetails/ProductDetailsFooter";

const ProductDetailsScreen = () => {
  const route = useRoute();
  const {product} = route.params;

  return (
    <SafeAreaView style={styles.productDetailContainer}>
      <ProductDetailsHeader product={product} />
      <ProductDetailsFooter />
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  productDetailContainer: {
    flex: 1,
    padding: 10,
    position: 'relative'
  },
});
