import './App.css'
import { Products, ProductInfo, Cart, Checkout } from './components/pages';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { styled } from 'styled-components';
import Header from './components/Header';
import store from './redux/store';
import { Provider } from 'react-redux';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppWrapper>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/products" />}
            />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </AppWrapper>
      </BrowserRouter>
    </Provider>
  );
};

export default App


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

// Other:

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
// start

