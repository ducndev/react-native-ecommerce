import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Divider } from "react-native-elements";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleSubmit = () => {
    console.log(`Submitted`);
  };

  return (
    <View style={styles.loginForm}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: "https://1000logos.net/wp-content/uploads/2021/02/Shopee-logo.png",
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
          source={{ uri: "https://img.icons8.com/ios/50/737373/user--v1.png" }}
          style={{ width: 25, height: 25 }}
        />
        <TextInput
          placeholder="Enter Your Phone Number"
          placeholderTextColor="gray"
          style={{ padding: 10 }}
        />
      </View>
      <Divider />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <Image
          source={{ uri: "https://img.icons8.com/ios/50/737373/lock--v1.png" }}
          style={{ width: 25, height: 25 }}
        />
        <TextInput
          placeholder="Enter Your Password"
          placeholderTextColor="gray"
          style={{ padding: 10 }}
          secureTextEntry={passwordVisible}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            position: "absolute",
            right: 0,
          }}
        >
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/737373/eyelashes-2d.png",
              }}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                color: "#228BE6",
                textDecorationLine: "underline",
              }}
            >
              Quên?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Divider style={{ marginBottom: 20 }} />
      <Button title="Đăng nhập" />
      <TouchableOpacity>
        <Text style={{ textAlign: "right", margin: 15, color: '#228BE6'}}>Đăng nhập bằng SMS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  loginForm: {
    padding: 30,
  },
});
