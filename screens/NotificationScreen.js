import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/home/Footer";
const NotificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.notificationContainer}>
      <Text>NotificationScreen</Text>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
  }
});
