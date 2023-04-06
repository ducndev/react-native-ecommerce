import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { cameraIcon, searchIcon } from "../../icons";
const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <Image
          source={{ uri: searchIcon.imageUrl }}
          style={{ width: 20, height: 20 }}
        />
        <TextInput
          placeholder="Search Here..."
          placeholderTextColor="gray"
          value={searchInput}
          onChange={(e) => setSearchInput(e.nativeEvent.text)}
          style={{ width: "80%" }}
        />
        <Image
          source={{ uri: cameraIcon.imageUrl }}
          style={{ width: 20, height: 20 }}
        />
      </View>
      <View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: -150,
    width: "70%",
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 5,
  },
  searchInput: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
  },
  headerIcon: {
    width: 20,
    height: 20,
  },
});

export default Search;
