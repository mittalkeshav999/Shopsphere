import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Register from './Compoents/User/Register';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Wishlist from './pages/Wishlist';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import { CartProvider } from './Compoents/Product/CartContext';
import { WishlistProvider } from './Compoents/Product/WishlistContext';
import { SearchProvider } from './Compoents/Product/SearchContext';
import { CurrencyProvider } from './Compoents/Product/CurrencyContext';
import Profile from './pages/Profile';
import AuthProvider from './Compoents/Product/AuthContext';
import CheckoutPage from './pages/CheckoutPage';

 
function App() {

  
  return (
    <BrowserRouter>
    <AuthProvider>
    <SearchProvider>
    <CartProvider>
    <WishlistProvider>
    <CurrencyProvider>
      <Routes>
      <Route  path='/'  element={<HomePage/>}  />
      <Route path='/register' element={<Register/>} />
      <Route path='/shoppage' element={<ShopPage/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/productpage/:id' element={<ProductPage/>}/>
      <Route path='/cartpage' element={<CartPage/>}/>
      <Route path='/categorypage/:name' element={<CategoryPage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}/>
      </Routes>
    </CurrencyProvider>
    </WishlistProvider>
    </CartProvider>
    </SearchProvider> 
    </AuthProvider> 
    </BrowserRouter>
   
  );
}

export default App;
