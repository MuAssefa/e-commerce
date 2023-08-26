import React from "react";
import HomeScreen from "./screen/HomeScreen.js";
import ProductScreen from "./screen/ProductScreen.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="product/:id" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
