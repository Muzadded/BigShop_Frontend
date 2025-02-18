import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopByCategory from "../pages/ShopByCategory";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

const AppRoute = () =>{
    return (
        <Routes>
            <Route path="/" element = {<HomePage/>} />
            <Route path="/shop/:categoryid" element = {<ShopByCategory/>} />
            <Route path="/productdetails/:productid" element = {<ProductDetails/>} />
            <Route path="/cartPage" element = {<CartPage/>} />
            <Route path="/checkoutPage" element = {<CheckoutPage/>} />
        </Routes>
    )
}

export default AppRoute;