import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
const Hero = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "98%",
          backgroundColor: "#fff",
          height: "100%",
          marginTop: -15,
          padding: 10,
          shadowColor: "#333",
          shadowOpacity: 0.5,
          shadowOffset: { width: 1, height: 1 },
          shadowRadius: 3,
          elevation: 3,
          borderRadius: 5,
        }}
      >
        <View style={{ width: "13%", marginTop: 5 }}>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/256/portrait-mode-scanning.png",
              }}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
        <Divider
          orientation="vertical"
          style={{ marginLeft: -10, marginRight: 10 }}
        />
        <View style={{ width: "40%" }}>
          <View style={styles.heroContainer}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FD7E14/banknotes.png",
              }}
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.heroTextLarge}>Ví ShopeePay</Text>
          </View>
          <Text style={styles.heroTextSmall}>Voucher giảm đến 40.000đ</Text>
        </View>
        <Divider
          orientation="vertical"
          style={{ marginLeft: -10, marginRight: 10 }}
        />
        <View style={{ width: "40%" }}>
          <View style={styles.heroContainer}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FD7E14/money-circulation.png",
              }}
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.heroTextLarge}>0 Xu</Text>
          </View>
          <Text style={styles.heroTextSmall}>Đổi xu lấy mã giảm giá</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
  },
  heroContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  heroTextSmall: {
    fontSize: 10,
    marginTop: 5,
  },
  heroTextLarge: {
    fontSize: 14,
  },
});

export default Hero;
