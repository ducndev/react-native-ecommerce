import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Advertisements = () => {
  return (
    <View style={styles.advertiseContainer}>
      <View
        style={[styles.advertiseItem, { width: "30%", position: "relative" }]}
      >
        <Image
          style={{ width: 70, height: 70 }}
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1676717962720-d9a812c8f8c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          }}
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: "lightgray",
            bottom: 0,
            width: 70,
            height: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text style={{ fontSize: 11, fontWeight: "bold" }}>Xem ngay</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/50/FD7E14/circled-chevron-right.png",
                }}
                style={{ width: 15, height: 15 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.advertiseItem, { width: "45%" }]}>
        <Image
          style={{ width: 200, height: 70 }}
          source={{
            uri: "https://omisell.com/vi-vn/wp-content/uploads/sites/2/2021/07/Ta%CC%82%CC%81t_ca%CC%89_nhu%CC%9B%CC%83ng_die%CC%82%CC%80u_ca%CC%82%CC%80n_bie%CC%82%CC%81t_ve%CC%82%CC%80_Flashsale_Shopee.png",
          }}
        />
      </View>
      <View style={[styles.advertiseItem, { width: "30%", position: 'relative' }]}>
        <Image
          style={{ width: 70, height: 70 }}
          source={{
            uri: "https://cf.shopee.vn/file/sg-11134201-23010-o9zmqcgbl4lvf6",
          }}
        />

        <View
          style={{
            position: "absolute",
            backgroundColor: "lightgray",
            bottom: 0,
            width: 70,
            height: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text style={{ fontSize: 11, fontWeight: "bold" }}>Xem ngay</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/50/FD7E14/circled-chevron-right.png",
                }}
                style={{ width: 15, height: 15 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  advertiseContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  advertiseItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Advertisements;
