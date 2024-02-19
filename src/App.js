import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage";
import Footer from "./customer/components/Footer/Footer.jsx";
import Product from "./customer/components/Product/Product.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
import Cart from "./customer/components/Cart/Cart.jsx";
import Checkout from "./customer/components/Checkout/Checkout.jsx";
import Order from "./customer/components/Order/Order.jsx";
import OrderDetails from "./customer/components/Order/OrderDetails.jsx";
import CustomerRouters from "./customer/Routers/CustomerRouters.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRouters />}/>
      </Routes>

    </div>
  );
}

export default App;
