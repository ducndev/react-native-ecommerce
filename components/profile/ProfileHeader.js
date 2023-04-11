import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import UserInfo from "./UserInfo";

const ProfileHeader = ({ navigation }) => {
  return (
    <View style={styles.profileHeaderContainer}>
      <View style={styles.profileHeaderIcons}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SettingScreen")}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/settings--v1.png",
              }}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/shopping-cart--v1.png",
              }}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: "red",
              borderRadius: 50,
              position: "absolute",
              right: 5,
              top: -10,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: '#fff',
            }}
          >
            <Text style={{fontSize: 12, color: 'white'}}>5</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("MessageScreen")}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/communication--v1.png",
              }}
              style={styles.profileIcon}
            />
            <View style={styles.chatBadgeContainer}>
              <Text style={styles.chatBadge}>19</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <UserInfo navigation={navigation} />
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  profileHeaderContainer: {
    height: 180,
    width: "100%",
    paddingTop: 30,
    backgroundColor: "#FA5252",
  },
  profileHeaderIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 30,
  },
  profileIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  chatBadgeContainer: {
    position: "absolute",
    top: -10,
    right: 10,
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  chatBadge: {
    fontSize: 10,
    fontWeight: "semibold",
    color: "#fff",
  },
});
