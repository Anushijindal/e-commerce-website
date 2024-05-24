import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage";
import Cart from "../customer/pages/Cart";
import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/footer/Footer";
import Products from "../customer/components/product/Products";
import ProductDetails from "../customer/components/product/ProductDetails";
import CheckOutPage from "../customer/pages/CheckOutPage";
import OrderSummary from "../customer/components/Checkout.js/OrderSummary";
import OrderHistoryPage from "../customer/pages/OrderHistoryPage";
import OrderDetailPage from "../customer/pages/OrderDetailPage";
import PaymentSuccess from "../customer/pages/PaymentSuccess";

const CustomerRoutes = () => {
  return (
    <div>
    <div>
        <Navigation/>
    </div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<HomePage/>}></Route>
        <Route path="/register" element={<HomePage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/:level1/:level2/:level3" element={<Products/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/checkout" element={<CheckOutPage/>}></Route>
        <Route path="/summary" element={<OrderSummary/>}></Route>
        <Route path="/account/myOrders" element={<OrderHistoryPage/>}></Route>
        <Route path="/account/myOrders/:orderId" element={<OrderDetailPage/>}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess/>}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
