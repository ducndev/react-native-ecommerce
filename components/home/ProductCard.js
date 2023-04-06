import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ProductCard = ({ products }) => {
  return (
    <View style={styles.productContainer}>
      {products.map((product, idx) => (
        <TouchableOpacity activeOpacity={0.7} key={product.id} >
          <View style={styles.singleProductContainer}>
            <View>
              <Image
                source={{ uri: product.imageUrl }}
                style={styles.productImage}
              />
            </View>
            <View style={styles.productDescription}>
              <Text style={{ fontSize: 13 }}>
                {product.name.length > 10
                  ? product.name.split(" ").slice(0, 10).join(" ") + "..."
                  : product.name}
              </Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/50/00CAAE/free-shipping.png",
                }}
                style={{ width: 25, height: 25, marginTop: 10 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <Text style={{ fontSize: 15, color: "#FA5252" }}>
                  {product.price.toLocaleString("vn-VND", {
                    style: "currency",
                    currency: "VND",
                  })}{" "}
                  đ
                </Text>
                <Text style={{ fontSize: 10 }}>
                  Đã bán{" "}
                  {product.sold > 1000
                    ? product.sold.toString().slice(0, 1) + "k"
                    : product.sold}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  singleProductContainer: {
    backgroundColor: "#fff",
    width: 170,
    height: 300,
  },
  productImage: {
    width: 170,
    height: 170,
  },
  productDescription: {
    padding: 5,
  },
});

export default ProductCard;
