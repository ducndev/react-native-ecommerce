import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const testCategories = [
  {
    id: 1,
    imageUrl:
      "https://product.hstatic.net/1000096703/product/1_79d22def9b984445944e650813a85c94_master.jpg",
    name: "Black B.2",
  },
  {
    id: 2,
    imageUrl: "https://cf.shopee.vn/file/70f313373bf7814a95dc452ddd43451f",
    name: "White W.2",
  },
  {
    id: 3,
    imageUrl:
      "https://vn-live-01.slatic.net/p/ba66f29c1a51c3c1559c31093a1c6644.jpg",
    name: "Dark Green G.2",
  },
  {
    id: 4,
    imageUrl:
      "https://hanggiadungviet.com/upload/ao-khoac-nu-vai-du-2-lop-tre-trung-1.jpg",
    name: "Red R.2",
  },
  {
    id: 5,
    imageUrl:
      "https://menfit.vn/uploads/v/b/B/A/x/N1F7M_ao-khoac-du-2-lop-4.jpg",
    name: "Black Yellow B.2",
  },
  {
    id: 6,
    imageUrl: "http://hanggiadungviet.com/upload/product/70334174103.jpg",
    name: "Yellow Y.2",
  },
];

const ProductDetailsHeader = ({ product, navigation }) => {
  const [isCategoryChoose, setIsCategoryChoose] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChooseCategories = (category) => {
    return isCategoryChoose === category
      ? setIsCategoryChoose(null)
      : setIsCategoryChoose(category);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsidePress = () => {
    if(isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <View style={styles.detailsHeaderContainer}>
      <View style={styles.detailsHeaderIcons}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <View style={styles.detailsHeaderIcon}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/left--v1.png",
              }}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View style={styles.detailsHeaderIcon}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/right2.png",
              }}
              style={{ width: 20, height: 20 }}
            />
          </View>
          <View style={styles.detailsHeaderIcon}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/FFFFFF/shopping-cart--v1.png",
              }}
              style={{ width: 20, height: 20 }}
            />
          </View>
          <View style={styles.detailsHeaderIcon}>
            <TouchableOpacity onPress={handleOpenMenu}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios/50/FFFFFF/menu-2.png",
                }}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.productDetailsImage}>
        <Image
          source={{
            uri: isCategoryChoose
              ? isCategoryChoose?.imageUrl
              : product.imageUrl,
          }}
          style={{ width: "100%", height: 360 }}
        />
      </View>
      <DetailsDropdownMenu isMenuOpen={isMenuOpen} />
      <DetailsHeaderChooseCategories
        isCategoryChoose={isCategoryChoose}
        handleChooseCategories={handleChooseCategories}
        handleOutsidePress={handleOutsidePress}
      />
    </View>
  );
};

const DetailsHeaderChooseCategories = ({
  handleChooseCategories,
  isCategoryChoose,
}) => {
  return (
    <View>
      <Text
        style={{
          margin: 5,
          fontSize: 12,
          fontWeight: isCategoryChoose ? "bold" : "semibold",
        }}
      >
        {isCategoryChoose?.name
          ? isCategoryChoose?.name
          : `${testCategories.length} phân loại có sẵn`}
      </Text>
      <ScrollView
        style={styles.chooseCategories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {testCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.chooseCategoriesItem}
            activeOpacity={0.8}
            onPress={() => {
              handleChooseCategories(category);
            }}
          >
            <View
              style={{
                margin: 5,
                borderColor:
                  isCategoryChoose?.id === category.id ? "red" : "none",
                borderWidth: isCategoryChoose?.id === category.id ? 1 : 0,
                borderStyle: "solid",
              }}
            >
              <Image
                source={{ uri: category.imageUrl }}
                style={{ width: 80, height: 80 }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const DetailsDropdownMenu = ({ isMenuOpen, handleOutsidePress }) => {
  return (
    <View style={styles.detailsDropdownMenu}>
      {isMenuOpen && (
        <TouchableWithoutFeedback onPress={() => console.log("presses")}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row", gap: 20, padding: 10 }}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios/50/737373/shopping-bag--v1.png",
                }}
                style={{ width: 20, height: 20 }}
              />
              <Text>Trở về trang chủ</Text>
            </View>
            <Divider />
            <View style={{ flexDirection: "row", gap: 20, padding: 10 }}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios/50/737373/info--v1.png",
                }}
                style={{ width: 20, height: 20 }}
              />
              <Text>Tố cáo sản phẩm này</Text>
            </View>
            <Divider />
            <View style={{ flexDirection: "row", gap: 20, padding: 10 }}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios/50/737373/help--v1.png",
                }}
                style={{ width: 20, height: 20 }}
              />
              <Text>Bạn cần trợ giúp gì?</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default ProductDetailsHeader;

const styles = StyleSheet.create({
  detailsHeaderContainer: {},
  detailsHeaderIcons: {
    position: "absolute",
    top: 50,
    left: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
  },
  detailsHeaderIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  chooseCategories: {},
  chooseCategoriesItem: {},
  detailsDropdownMenu: {
    width: 200,
    backgroundColor: "#fff",
    position: "absolute",
    right: 20,
    top: 70,
    zIndex: 99999,
    borderRadius: 10,
  },
});
