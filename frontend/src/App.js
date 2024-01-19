import { Router, Routes, Route, Outlet, Link } from "react-router-dom";
import "./main.css";

import HomeScreen from "./screens/HomeScreen";
import Layout from "./components/Layout";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import SignupScreen from "./screens/SignupScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/register" element={<SignupScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
