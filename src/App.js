import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";
import Product from "./Product";
import SingleProduct from "./SingleProduct";

const App = () => {
  return<Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Product/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/singleproduct/:id" element={<SingleProduct/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<Error/>} />

    </Routes>
  </Router>
};

export default App;
