import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductDetailsFooter = () => {
  return (
    <View style={styles.productDetailsFooter}>
      <View
        style={[styles.footerButtonContainer, { backgroundColor: "#00AFAA" }]}
      >
        <TouchableOpacity
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={0.8}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FFFFFF/communication--v1.png",
            }}
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ fontSize: 10, color: "white" }}>Chat ngay</Text>
        </TouchableOpacity>
      </View>
      <Divider style={{ backgroundColor: "gray", width: 1 }} />
      <View
        style={[styles.footerButtonContainer, { backgroundColor: "#00AFAA" }]}
      >
        <TouchableOpacity
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={0.8}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FFFFFF/add-shopping-cart--v1.png",
            }}
            style={{ width: 30, height: 30 }}
          />
          <Text
            style={{
              fontSize: 10,
              color: "white",
              textAlign: "center",
              width: "100%",
            }}
          >
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.footerButtonContainer,
          { width: "60%", backgroundColor: "#FA5252" },
        ]}
      >
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{ fontSize: 15, color: "white" }}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailsFooter;

const styles = StyleSheet.create({
  productDetailsFooter: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerButtonContainer: {
    width: "25%",
    height: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
