import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/home/Footer";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileSale from "../components/profile/ProfileSale";
import { ScrollView } from "react-native-gesture-handler";
const ProfileScreen = ({ navigation }) => {
  
  return (
    <View style={styles.profileContainer}>
        <ScrollView horizontal={false} style={{marginBottom: 50}}>
          <ProfileHeader navigation={navigation} />
          <ProfileSale navigation={navigation} />
        </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
});

export default ProfileScreen;
