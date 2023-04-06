import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import { socialIcons } from "../../icons";
import DividerText from "../login/DividerText";
const RegisterSocial = () => {
  return (
    <View style={styles.registerSocialContainer}>
      <DividerText />
      <View style={styles.registerSocialList}>
        {socialIcons.map((icon) => (
          <View key={icon.id} style={styles.registerSocialContainer}>
            <TouchableOpacity style={styles.registerSocialItem}>
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

export default RegisterSocial;

const styles = StyleSheet.create({
  registerSocialContainer: {},
  registerSocialList: {
    padding: 30,
  },
  registerSocialContainer: {},
  registerSocialItem: {
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
