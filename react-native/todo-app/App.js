import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Todo from "./app/Todo";
import ProductList from "./app/ProductList";

const { View, Text, StyleSheet, Button } = require("react-native");

export default function App() {
  let [text, setText] = useState("Welcome");
  let changeText = () => {
    setText("It Works");
  };
  return (
    <>
      <View style={style.container}>
        <StatusBar hidden />
        {/* <Todo /> */}
        <ProductList />
      </View>
    </>
  );
}

// styleSheet
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "space-between",
  },
  text: {
    fontSize: 32,
    color: "white",
    backgroundColor: "green",
    padding: 10,
  },
});
