import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LoginFooter = ({ navigation }) => {
  return (
    <View style={styles.loginFooterContainer}>
      <Text>
        Bạn chưa có tài khoản?{" "}
        <Text
          style={{ color: "#228BE6", textDecorationLine: "underline" }}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Đăng ký
        </Text>
      </Text>
    </View>
  );
};

export default LoginFooter;

const styles = StyleSheet.create({
  loginFooterContainer: {
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
