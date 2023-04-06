import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RegisterFooter = ({ navigation }) => {
  return (
    <View style={styles.registerFooterContainer}>
      <Text>
        Bạn đã có tài khoản?{" "}
        <Text
          style={{ color: "#228BE6", textDecorationLine: "underline" }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Đăng nhập
        </Text>
      </Text>
    </View>
  );
};

export default RegisterFooter;

const styles = StyleSheet.create({
  registerFooterContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
