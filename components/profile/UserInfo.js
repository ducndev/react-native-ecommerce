import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Divider } from "react-native-elements";
import { Button } from "react-native";
const UserInfo = ({navigation}) => {
  const [isUserVerified, setIsUserVerified] = useState(false);
  return (
    <View style={styles.userInfoContainer}>
      {
        isUserVerified ? (
          <><View>
            <TouchableOpacity activeOpacity={0.8}>
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6XmVaKMw3i65yRAN6Ak4MXE6eQTqxNSb4onBhTL6erurw0s5tHetTt_L6eJzK9wgans&usqp=CAU",
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  resizeMode: "contain",
                  marginLeft: 10,
                  marginTop: 20,
                }} />
            </TouchableOpacity>
          </View><View style={styles.userInfo}>
              <Text style={styles.userInfoName}>Plutoandcharon1312</Text>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: "lightgray",
                    width: 90,
                    borderRadius: 5,
                    height: 13,
                  }}
                >
                  <Text style={{ fontSize: 10, paddingLeft: 5 }}>Thành viên bạc</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.userInfoFollow}>
                <Text style={{ color: "#fff", fontSize: 11 }}>
                  Người theo: <Text style={{ fontWeight: "bold" }}>0</Text>
                </Text>
                <Divider style={{ margin: 5 }} orientation="vertical" />
                <Text style={{ color: "#fff", fontSize: 11 }}>
                  Đang theo dõi: <Text style={{ fontWeight: "bold" }}>2</Text>
                </Text>
              </View>
            </View></>
        ) : (
          <View style={{marginLeft: 20}}>
            <Button title="Login" style={{marginLeft: 10,}} onPress={() => navigation.navigate('LoginScreen')}/>
          </View>
        )
      }
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  userInfo: {
    flexDirection: "column",
    gap: 5,
  },
  userInfoName: {
    fontSize: 15,
    marginTop: 20,
    fontWeight: "bold",
    color: "white",
  },

  userInfoFollow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
