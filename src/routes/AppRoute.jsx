import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopByCategory from "../pages/ShopByCategory";
import ProductDetails from "../pages/ProductDetails";

const AppRoute = () =>{
    return (
        <Routes>
            <Route path="/" element = {<HomePage/>} />
            <Route path="/shop/:categoryid" element = {<ShopByCategory/>} />
            <Route path="/productdetails/:productid" element = {<ProductDetails/>} />
        </Routes>
    )
}

export default AppRoute;