import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
export default function ProductList() {
  let [product, setProducts] = useState([]);
  let getAProductData = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    getAProductData();
  }, []);
  return (
    <>
      <ScrollView>
        <View style={style.container}>
          {product.map((prod) => {
            return (
              <View key={prod.id} style={style.card}>
                <View>
                  <Text style={style.cardText}>{prod.title}</Text>
                  <Text style={style.cardText}>Rs. {prod.price} /-</Text>
                </View>
                <Image
                  style={style.image}
                  source={{
                    uri: prod.image,
                  }}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 50,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 5,
  },
  cardText: {
    width: 200,
  },
});
