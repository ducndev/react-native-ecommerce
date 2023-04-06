import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Content from "../components/home/Content";
import Footer from "../components/home/Footer";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={{ position: "relative" }}>
        <Header />
        <Hero />
        <Content />
      </View>
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Footer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    height: "100%",
  },
});
