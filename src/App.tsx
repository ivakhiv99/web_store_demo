import './App.css'
import { Products, ProductInfo, Cart, Checkout } from './components/pages';
import { Route, Routes, Navigate } from "react-router-dom";
import { styled } from 'styled-components';
import Header from './components/Header';
import { useEffect } from 'react';
import { syncCart } from './redux/cartSlice';
import { useAppDispatch } from './redux/store';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export enum RouteNames {
  products = '/products',
  product = '/product',
  cart = '/cart',
  checkout = '/checkout',
}

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedCartData = localStorage.getItem('cart');
    const userCart = storedCartData ? JSON.parse(storedCartData) : [];
    dispatch(syncCart(userCart));
  }, []);

  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate to={RouteNames.products} />}
        />
        <Route path={RouteNames.products} element={<Products />} />
        <Route path={`${RouteNames.product}/:productId`} element={<ProductInfo />} />
        <Route path={RouteNames.cart} element={<Cart />} />
        <Route path={RouteNames.checkout} element={<Checkout />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;


// TODO:

// Pages:  
// - shoping cart
// - checkout 

// Functionality: 
// * add a filter for displaying products?

// - add product to cart
// - change quantity of products in cart
// - delete products from cart
// - calculate price
// - collect and display checkout info


//TIME LOG:

// 07.07.2023
// start 11:45 - end 13:00 = 75
// start 13:15 - end 14:30 = 65
// start 15:00 - end 17:15 = 135  = 275

// 08.07.2023
// start 14:30 - end 15:00 = 30
// start 20:00 - end 20:30 = 30   = 60 

// 09.07.2023
// start 11:00 - end 11:45 = 15   
// start 12:00 - end 12:30 = 30   = 45

// 10.07.2023 
// start 11:30 - end 13:00 = 90
// start 13:45 - end 14:00 = 15
// start 14:30 - end 15:15 = 45
// start 16:30 - end 17:15 = 45   = 195

// 20.07.2023
// start 11:30 - end 12:15 = 45

// 21.07.2023
// start 10:45 - end 11:30 = 45
// start 11:45 - end 12:30 = 45   = 90


// 24.07.2023
// start 15:15 - end 