import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { footerIcons } from "../../icons";

const Footer = ({ navigation }) => {
  console.log({ navigation });
  return (
    <View style={styles.footerContainer}>
      {footerIcons.map((icon, index) => (
        <View
          key={index}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(icon.screen)}
            activeOpacity={0.8}
          >
            <Image source={{ uri: icon.imageUrl }} style={styles.footerIcon} />
            {icon.name === "Thông báo" && (
              <View style={styles.footerBadgeIcon}>
                <Text style={styles.footerBadgeText}>+99</Text>
              </View>
            )}
            <Text style={{ textAlign: "center", fontSize: 11, width: "100%" }}>
              {icon.name}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    marginTop: 300,
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-around",
  },
  footerIcon: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  footerBadgeIcon: {
    width: 25,
    height: 20,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 5,
    top: -5,
  },
  footerBadgeText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default Footer;
