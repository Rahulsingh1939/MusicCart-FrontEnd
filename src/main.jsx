import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import App from "./App.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import OrderSuccess from "./pages/OrderSucess/OrderSucess.jsx";

import "./index.css";
import { AuthProvider } from "./context/api.jsx";

import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import { CartProvider } from "./context/cart.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import { TotalProvider } from "./context/total.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/order-success",
    element: <OrderSuccess />,
  },
  {
    path: "/product/:slug",
    element: <ProductPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/checkout-direct/:slug",
    element: <Checkout />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    <AuthProvider>
      <CartProvider>
        <TotalProvider>
          <RouterProvider router={router} />
        </TotalProvider>
      </CartProvider>
      <Toaster />
    </AuthProvider>
  </>
);
