import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductDetailsHeader from "../components/productDetails/ProductDetailsHeader";

const ProductDetailsScreen = (props) => {
  const {productId} = props.route.params;
  return (
    <SafeAreaView style={styles.productDetailContainer}>
      <ProductDetailsHeader navigation={navigation}/>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  productDetailContainer: {
    flex: 1,
    padding: 10,
  },
});
