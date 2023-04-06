import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const RegisterHeader = ({navigation}) => {
  return (
    <View style={styles.registerContainer}>
      <View style={styles.registerLeft}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FD7E14/left--v1.png",
            }}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "semibold" }}>Đăng ký</Text>
      </View>
      <View style={styles.registerRight}>
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

export default RegisterHeader;

const styles = StyleSheet.create({
  registerContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  registerLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  registerRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginRight: 10,
  },
});
