import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DividerText from "./DividerText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import { socialIcons } from "../../icons";
const LoginSocial = () => {
  return (
    <View style={styles.loginSocialContainer}>
      <DividerText />
      <View style={styles.loginSocialList}>
        {socialIcons.map((icon) => (
          <View key={icon.id} style={styles.loginSocialContainer}>
            <TouchableOpacity style={styles.loginSocialItem}>
              <Image
                source={{
                  uri: icon.imageUrl,
                }}
                style={{ width: 25, height: 25 }}
              />
              <Text style={{ fontSize: 15 }}>{icon.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default LoginSocial;

const styles = StyleSheet.create({
  loginSocialContainer: {},
  loginSocialList: {
    padding: 30,
  },
  loginSocialContainer: {},
  loginSocialItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    borderRadius: 5,
  },
});
