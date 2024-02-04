// functional component
import Todo from "./components/Todo";

// import (optional)

// logic
// function App() {
//   const a = 10;
//   return <h1>Welcome to session</h1>;
// }

const App = () => {
  return (
    <>
      <h1 className="text-center">Todo Application</h1>
      <Todo />
    </>
  );
};

// class App extends Component {
//   text = "React is awesome";
//   constructor() {
//     super();
//   }

//   render() {
//     return <h1>This is a class component {this.text}</h1>;
//   }
// }

// export
export default App;
