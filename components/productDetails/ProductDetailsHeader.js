import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductDetailsHeader = ({product}) => {
  return (
    <View style={styles.detailsHeaderContainer}>
      <View style={styles.detailsHeaderIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <View
            style={styles.detailsHeaderIcon}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/left--v1.png",
              }}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View style={styles.detailsHeaderIcon}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/right2.png",
              }}
              style={{ width: 20, height: 20 }}
            />
          </View>
          <View style={styles.detailsHeaderIcon}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/shopping-cart--v1.png",
              }}
              style={{ width: 20, height: 20 }}
            />
          </View>
          <View style={styles.detailsHeaderIcon}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/menu-2.png",
              }}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.productDetailsImage}>
        <Image source={{uri: product.imageUrl}}  style={{width: "100%", height: 350}}/>
        <Text>{product.name}</Text>
      </View>
    </View>
  );
};

export default ProductDetailsHeader;

const styles = StyleSheet.create({
  detailsHeaderContainer: {},
  detailsHeaderIcons: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
  },
  detailsHeaderIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});
