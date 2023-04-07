import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import PageDivider from "../PageDivider";
import { Button } from "react-native";
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
      />
      <PageDivider />
      <DetailsProductInfo product={product} />
      <PageDivider />
      <ShopPolicies />
      <ShopInfo />
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

const DetailsDropdownMenu = ({ isMenuOpen }) => {
  return (
    <View style={styles.detailsDropdownMenu}>
      {isMenuOpen && (
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
      )}
    </View>
  );
};

const DetailsProductInfo = ({ product }) => {
  return (
    <View style={styles.detailsProductInfo}>
      <View>
        <Text style={{ fontSize: 14 }}>{product.name}</Text>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: "#FD7E14", fontSize: 15, marginTop: 15 }}>
            {" "}
            {product.price.toLocaleString("vn-VND", {
              style: "currency",
              currency: "VND",
            })}{" "}
            -{" "}
            {(product.price + 20000).toLocaleString("vn-VND", {
              style: "currency",
              currency: "VND",
            })}{" "}
          </Text>
          <View style={{ flexDirection: "row", gap: 20, marginTop: 3 }}>
            <Text
              style={{
                color: "gray",
                textDecorationLine: "line-through",
                fontSize: 15,
              }}
            >
              {(150000).toLocaleString("vn-VND", {
                style: "currency",
                currency: "VND",
              })}
            </Text>
            <View
              style={{
                width: 60,
                height: 20,
                borderWidth: 1,
                borderColor: "red",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 11 }}>Giảm 10%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/100/FD7E14/star--v1.png",
            }}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/100/FD7E14/star--v1.png",
            }}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/100/FD7E14/star--v1.png",
            }}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/100/FD7E14/star--v1.png",
            }}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/100/FD7E14/star-half-empty.png",
            }}
            style={{ width: 15, height: 15 }}
          />
        </View>
        <Text>4.6</Text>
        <Divider orientation="vertical" />
        <View>
          <Text>
            Đã bán{" "}
            {product.sold > 1000
              ? product.sold.toString().slice(0, 1) + "k"
              : product.sold}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginRight: 10,
            gap: 10,
            width: "30%",
          }}
        >
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/787878/hearts--v1.png",
              }}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/787878/right2.png",
              }}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ShopPolicies = () => {
  return (
    <View style={styles.shopPolicies}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 45,
          gap: 20,
        }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/22C3E6/free-shipping.png",
          }}
          style={{ width: 20, height: 20 }}
        />
        <Text>Miễn phí vận chuyển</Text>
      </View>
      <Divider orientation="vertical" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 20,
          height: 50,
        }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/737373/airplane-take-off.png",
          }}
          style={{ width: 20, height: 20 }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text>Vận chuyển Oversea</Text>
          <Text>Phí vận chuyển: 0đ</Text>
        </View>
      </View>
      <Divider orientation="horizontal" />
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          height: 50,
          backgroundColor: "#FFEFE2",
        }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/FD7E14/shield-with-a-dollar-sign.png",
          }}
          style={{ width: 20, height: 20 }}
        />
        <View>
          <Text>ZShop đảm bảo</Text>
          <Text>3 ngày trả hàng / hoàn tiền</Text>
        </View>
      </View>
      <PageDivider />
    </View>
  );
};

const ShopInfo = () => {
  return (
    <View style={styles.shopInfo}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <View>
          <Image
            source={{
              uri: "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
            }}
            style={{
              width: 60,
              height: 60,
              resizeMode: "cover",
              borderRadius: 50,
            }}
          />
        </View>
        <View style={{ flexDirection: "column", gap: 3 }}>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>
            liamaimelecroissant
          </Text>
          <Text style={{ fontSize: 12, color: "gray" }}>
            Online 1 phút trước
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/737373/marker--v1.png",
              }}
              style={{ width: 15, height: 15 }}
            />
            <Text style={{ fontSize: 12, color: "gray" }}>Hà Nội</Text>
          </View>
        </View>
        <View style={{ marginLeft: 50 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#FD7E14",
              fontSize: 12,
              padding: 5,
            }}
            activeOpacity={0.8}
          >
            <Text style={{ color: "#FD7E14" }}>Xem shop</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 12 }}>
          <Text style={{ color: "#FD7E14", fontWeight: "bold" }}>333</Text> Sản
          phẩm
        </Text>
        <Text style={{ fontSize: 12 }}>
          <Text style={{ color: "#FD7E14", fontWeight: "bold" }}>4.7</Text> đánh
          giá
        </Text>
        <Text style={{ fontSize: 12 }}>
          <Text style={{ color: "#FD7E14", fontWeight: "bold" }}>100%</Text>{" "}
          phản hồi chat
        </Text>
      </View>
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
  detailsProductInfo: {
    padding: 5,
  },
  shopPolicies: {
    padding: 5,
  },
  shopInfo: {
    padding: 10,
    marginBottom: 100,
  },
});
