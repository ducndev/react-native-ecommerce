import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const LoginHeader = ({navigation}) => {
  return (
    <View style={styles.loginHeaderContainer}>
      <View style={styles.loginHeaderLeft}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FD7E14/left--v1.png",
            }}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "semibold" }}>Đăng nhập</Text>
      </View>
      <View style={styles.loginHeaderRight}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FD7E14/new-store.png",
            }}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FD7E14/help--v1.png",
            }}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  loginHeaderContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  loginHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  loginHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginRight: 10,
  },
});
