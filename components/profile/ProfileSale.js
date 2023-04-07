import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { products } from "../../datas";
import { useNavigation } from "@react-navigation/native";
const ProfileSale = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.profileSaleContainer}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 5,
        }}
      >
        <View
          style={{
            width: 25,
            height: 25,
            backgroundColor: "#FA5252",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            4.4
          </Text>
        </View>
        <Text style={styles.profileSaleTitle}>4.4 Sale Thời Trang Mỹ Phẩm</Text>
        <View
          style={{
            backgroundColor: "#FA5252",
            width: 30,
            height: 15,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopEndRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 11, color: "white" }}>Mới</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.saleContentContainer}>
        <View style={styles.saleContentItem}>
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#FA5252",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              4.4
            </Text>
          </View>
          <Text
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              width: "50%",
              fontSize: 11,
            }}
          >
            Trang chính
          </Text>
        </View>
        <View style={styles.saleContentItem}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/250/FA5252/the-flash-sign.png",
            }}
            style={{ width: 30, height: 30 }}
          />
          <Text
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontSize: 11,
              width: "70%",
            }}
          >
            Khung giờ săn Sale
          </Text>
        </View>
        <View style={styles.saleContentItem}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/250/FA5252/coins.png",
            }}
            style={{ width: 30, height: 30 }}
          />
          <Text
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontSize: 11,
              width: "70%",
            }}
          >
            Mã Giảm Giá
          </Text>
        </View>
        <View style={styles.saleContentItem}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/250/FA5252/dress-front-view.png",
            }}
            style={{ width: 30, height: 30 }}
          />
          <Text
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontSize: 11,
            }}
          >
            Siêu Hội Thời Trang
          </Text>
        </View>
      </View>
      <Divider />
      <SaleFooterContainer />
      <SaleFooterList />
      <Divider style={{ marginTop: 15 }} />
      <PageDivider />
      <MyUtilities />
      <PageDivider />
      <ReBuyPart products={products}/>
      <PageDivider />
      <StartSelling />
      <PageDivider />
      <CloseCustomer />
      <Divider />
      <Liked />
    </ScrollView>
  );
};

const SaleFooterContainer = () => {
  return (
    <View style={styles.saleFooterContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/250/00A6A2/phonelink-ring--v1.png",
            }}
            style={{ width: 20, height: 20 }}
          />
          <Text>Đơn nạp thẻ và dịch vụ</Text>
        </View>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/250/737373/more-than.png",
          }}
          style={{ width: 18, height: 18 }}
        />
      </View>
      <Divider style={{ marginTop: 10 }} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/250/5FCFFF/reminders.png",
            }}
            style={{ width: 20, height: 20 }}
          />
          <Text>Đơn mua</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ fontSize: 11, color: "gray" }}>
            Xem lịch sử mua hàng
          </Text>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/250/737373/more-than.png",
            }}
            style={{ width: 18, height: 18 }}
          />
        </View>
      </View>
      <Divider style={{ marginTop: 10 }} />
    </View>
  );
};

const SaleFooterList = () => {
  return (
    <View style={styles.saleFooterListContainer}>
      <View style={styles.footerListItem}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/737373/wallet--v1.png",
          }}
          style={{ width: 25, height: 25 }}
        />
        <Text style={{ fontSize: 11 }}>Chờ xác nhận</Text>
      </View>
      <View style={styles.footerListItem}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/737373/open-delivered-box.png",
          }}
          style={{ width: 25, height: 25 }}
        />
        <Text style={{ fontSize: 11 }}>Chờ lấy hàng</Text>
      </View>
      <View style={styles.footerListItem}>
        <Image
          source={{ uri: "https://img.icons8.com/ios/50/737373/truck--v1.png" }}
          style={{ width: 25, height: 25 }}
        />
        <Text style={{ fontSize: 11 }}>Đang giao</Text>
      </View>
      <View style={styles.footerListItem}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/737373/rating-circled.png",
          }}
          style={{ width: 20, height: 20 }}
        />
        <Text style={{ fontSize: 11 }}>Đánh giá</Text>
      </View>
    </View>
  );
};

const MyUtilities = () => {
  return (
    <View style={styles.utilitiesContainer}>
      <View style={styles.utilitiesHeader}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/FD7E14/code-blocks.png",
          }}
          style={{ width: 30, height: 30 }}
        />
        <Text style={{ fontSize: 14 }}>Tiện ích của tôi</Text>
      </View>
      <Divider />
      <View style={styles.utilitiesMiddleContainer}>
        <View style={[styles.utilitiesMiddleItem, { gap: 15 }]}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FD7E14/wallet-app--v1.png",
            }}
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ fontSize: 10 }}>Ví ShopeePay</Text>
          <Text style={{ fontSize: 10, color: "gray" }}>Sử dụng ngay</Text>
        </View>
        <View style={[styles.utilitiesMiddleItem, { gap: 10 }]}>
          <Image
            source={{ uri: "https://img.icons8.com/ios/50/FD7E14/cheap-2.png" }}
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ fontSize: 10 }}>Shopee Xu</Text>
          <Text style={{ fontSize: 14, color: "#FD7E14", fontWeight: "bold" }}>
            0 Xu
          </Text>
        </View>
        <View style={styles.utilitiesMiddleItem}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FD7E14/ticket--v1.png",
            }}
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ fontSize: 10 }}>Kho voucher</Text>
          <Text style={{ fontSize: 10, textAlign: "center", color: "gray" }}>
            Nhanh tay sử dụng Voucher nhé!
          </Text>
        </View>
      </View>
      <Divider style={{ margin: 10 }} />
      <View style={styles.utilitiesFooterContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FD7E14/check-dollar.png",
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text>Bảo hiểm của tôi</Text>
          <View
            style={{
              backgroundColor: "#FA5252",
              width: 30,
              height: 15,
              borderBottomEndRadius: 10,
              borderTopEndRadius: 10,
              borderTopStartRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, color: "white" }}>Mới</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 12, color: "gray" }}>Xem chi tiết</Text>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/250/737373/more-than.png",
            }}
            style={{ width: 18, height: 18 }}
          />
        </View>
      </View>
    </View>
  );
};

const ReBuyPart = ({products}) => {

  const navigation = useNavigation();
  
  function navigateToProductDetail(product) {
    navigation.navigate("ProductDetailsScreen", { product });
  }
  return (
    <View style={styles.reBuyContainer}>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: 5,
        }}
      >
        <View style={styles.reBuyHeader}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FD7E14/shopping-bag--v1.png",
            }}
            style={{ width: 20, height: 20 }}
          />
          <Text>Mua lại</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={{ color: "gray", fontSize: 12 }}>Xem thêm sản phẩm</Text>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/250/737373/more-than.png",
            }}
            style={{ width: 18, height: 18 }}
          />
        </View>
      </View>
      <Divider />
      <ScrollView
        style={styles.productContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {products.map((product, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => {
              navigateToProductDetail(product);
            }}
          >
            <View
              style={[
                styles.productCard,
                {
                  borderWidth: 1,
                  borderColor: "#ccc",
                  marginLeft: 10,
                  marginTop: 10,
                },
              ]}
            >
              <Image
                source={{
                  uri: product.imageUrl,
                }}
                style={{ width: 120, height: 120 }}
              />
              <View
                style={{
                  width: "100%",
                  padding: 5,
                }}
              >
                <Text style={{ fontSize: 11, color: "gray", marginTop: 10 }}>
                  Đã mua 1 lần
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ color: "#FA5252", fontSize: 11 }}>
                  {product.price.toLocaleString("vn-VND", {
                    style: "currency",
                    currency: "VND",
                  })}{" "}
                  </Text>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: "#FA5252",
                      borderRadius: 50,
                      padding: 3,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://img.icons8.com/ios/50/FFFFFF/shopping-cart--v1.png",
                      }}
                      style={{ width: 12, height: 12 }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const StartSelling = () => {
  return (
    <View style={styles.startSellingContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/FD7E14/shopping-1.png",
          }}
          style={{ width: 30, height: 30 }}
        />
        <Text>Bắt đầu bán hàng</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 11, color: "gray" }}>Đăng ký miễn phí</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/250/737373/more-than.png",
          }}
          style={{ width: 18, height: 18 }}
        />
      </View>
    </View>
  );
};

const CloseCustomer = () => {
  return (
    <View style={styles.closeCustomerContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/FD7E14/receive-euro.png",
          }}
          style={{ width: 30, height: 30 }}
        />
        <Text>Khách hàng thân thiết</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 11, color: "gray" }}>Thành viên bạc</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/250/737373/more-than.png",
          }}
          style={{ width: 18, height: 18 }}
        />
      </View>
    </View>
  );
};

const Liked = () => {
  return (
    <View style={styles.likedContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/FD7E14/hearts--v1.png",
          }}
          style={{ width: 30, height: 30 }}
        />
        <Text>Đã thích</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 11, color: "gray" }}>2 likes</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/250/737373/more-than.png",
          }}
          style={{ width: 18, height: 18 }}
        />
      </View>
    </View>
  );
};

const PageDivider = () => {
  return (
    <View
      style={{ width: "100%", height: 10, backgroundColor: "#EAEAEA" }}
    ></View>
  );
};

export default ProfileSale;

const styles = StyleSheet.create({
  profileSaleContainer: {},
  profileSaleTitle: {
    marginTop: 20,
    marginBottom: 20,
  },
  saleContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  saleContentItem: {
    width: "20%",
    height: 80,
    alignItems: "center",
    gap: 5,
  },
  saleFooterContainer: {
    padding: 10,
  },
  saleFooterListContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  footerListItem: {
    width: "25%",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  utilitiesContainer: {
    padding: 10,
  },
  utilitiesHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 10,
  },
  utilitiesMiddleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  utilitiesMiddleItem: {
    width: "30%",
    minHeight: 70,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  utilitiesFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reBuyHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  productContainer: {
    // marginBottom: 100,
  },
  productCard: {
    // padding: 15,
  },
  startSellingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#F6E0CE",
  },
  closeCustomerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  likedContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});
