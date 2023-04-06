import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductDetailsHeader = ({ navigation }) => {
  return (
    <View style={styles.detailsHeaderContainer}>
      <View style={styles.detailsHeaderIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              backgroundColor: "#ccc",
              borderRadius: 50,
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/left--v1.png",
              }}
              style={{ width: 30, height: 30 }}
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
              style={{ width: 25, height: 25 }}
            />
          </View>
          <View style={styles.detailsHeaderIcon}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/shopping-cart--v1.png",
              }}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <View style={styles.detailsHeaderIcon}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/menu-2.png",
              }}
              style={{ width: 25, height: 25 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.productDetailsImage}></View>
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
  },
  detailsHeaderIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#ccc",
  },
});
