import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

export default function Todo() {
  let [inputText, setInputText] = useState("");
  let [todos, setTodos] = useState([]);

  const todoDone = (index) => {
    let _todos = [...todos];
    _todos[index].status = true;
    setTodos(_todos);
  };
  const changeInput = (text) => {
    setInputText(text);
  };
  const saveTodo = () => {
    let _todos = [...todos];
    _todos.push({ name: inputText, status: false });

    setTodos(_todos);
    setInputText("");
    alert("Todo Saved");
  };
  return (
    <>
      <View style={style.container}>
        <TextInput
          onChangeText={changeInput}
          style={style.inputBox}
          placeholder="Enter todo Name"
          value={inputText}
        />
        <Button title="Save" color="magenta" onPress={saveTodo} />
        <View style={style.mt10}>
          {todos.map((todo, index) => {
            return (
              <View
                key={index}
                style={todo.status ? style.listBoxDone : style.listBox}
                onTouchStart={() => todoDone(index)}
              >
                <Text style={todo.status ? style.textDone : ""}>
                  {todo.name}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "start",
  },
  inputBox: {
    borderBottomWidth: 2,
    borderBottomColor: "red",
    paddingTop: 20,
    paddingStart: 10,
    paddingEnd: 10,
    width: 300,
    color: "green",
    marginBottom: 10,
  },
  listBox: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  },
  listBoxDone: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    backgroundColor: "green",
  },
  textDone: {
    color: "white",
  },
});
