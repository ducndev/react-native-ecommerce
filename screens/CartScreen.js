import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CartScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FD7E14/left--v1.png",
            }}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <Text>CartScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
