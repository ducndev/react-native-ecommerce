import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Divider } from "react-native-elements";

const RegisterForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleSubmit = () => {
    console.log(`Submitted`);
  };

  return (
    <View style={styles.registerForm}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: "https://assets.stickpng.com/thumbs/5900c80316ae4b3fc58f4825.png",
          }}
          style={{ width: 70, height: 70 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Image
          source={{ uri: "https://img.icons8.com/ios/50/737373/phone--v1.png" }}
          style={{ width: 25, height: 25 }}
        />
        <TextInput
          placeholder="Enter Your Phone Number"
          placeholderTextColor="gray"
          style={{ padding: 10 }}
        />
      </View>
      <Divider style={{ marginBottom: 20 }} />
      <Button title="Đăng ký" />
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  registerForm: {
    padding: 30,
    marginBottom: 20,
  },
});
