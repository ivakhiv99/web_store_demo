import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Products, ProductInfo, Cart, Checkout } from './components/pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" replace />,
  },
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/product/:productId",
    element: <ProductInfo/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


// TODO:

// Pages:  
// - product list
// - product details
// - shoping cart
// - checkout 

// Functionality: 
// - fetch list of products
// * add a filter for displaying products?
// - fetch info about product
// - add product to cart
// - change quantity of products in cart
// - delete products from cart
// - calculate price
// - collect and display checkout info

// Other:
// - find product api

//TIME LOG:

// 07.07.2023
// start 11:45 - end 13:00 = 75
// start 13:15 - end 14:30 = 65
// start 15:00 - end 17:15 = 135

// 08.07.2023
// start 14:30 - end 