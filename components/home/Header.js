import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Search from "./Search";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://thumbs.dreamstime.com/b/shopping-concept-empty-red-cart-pink-background-online-consumers-can-shop-home-delivery-service-copy-space-193396536.jpg",
        }}
        style={{
          width: "100%",
          height: 170,
          resizeMode: "cover",
        }}
      />
      <View>
        <Search />
        <View style={styles.headerIconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
            <View style={{position: 'relative'}}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios/50/FFFFFF/shopping-cart--v1.png",
                }}
                style={[styles.headerIcon]}
              />
              <View
                style={{
                  backgroundColor: "red",
                  width: 20,
                  height: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: "#fff",
                  position: 'absolute',
                  right: -10,
                  top: -10
                }}
              >
                <Text style={{ color: "#fff", fontSize: 12 }}>9</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ position: "relative" }}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios/50/FFFFFF/communication--v1.png",
                }}
                style={styles.headerIcon}
              />
              <View style={styles.chatBadgeContainer}>
                <Text style={styles.chatBadge}>19</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  headerIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    top: -145,
  },
  headerIcon: {
    width: 25,
    height: 25,
    marginLeft: 20,
  },
  chatBadgeContainer: {
    position: "absolute",
    top: -10,
    right: 0,
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  chatBadge: {
    fontSize: 10,
    fontWeight: "semibold",
    color: "#fff",
  },
});

export default Header;
