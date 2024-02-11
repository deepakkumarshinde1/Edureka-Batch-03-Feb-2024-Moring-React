import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
export default App;
