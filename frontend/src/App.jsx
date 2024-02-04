import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DisplayList from './components/Display';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';

import './main.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path='/checkout' element={<CheckoutScreen />} />
        <Route path='/products/:id' element={<ProductScreen />} />
        <Route path='/cart/:productId?' element={<CartScreen />} />
      </Route>
    </Routes>
  );
};

export default App;
