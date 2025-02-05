import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopByCategory from "../pages/ShopByCategory";

const AppRoute = () =>{
    return (
        <Routes>
            <Route path="/" element = {<HomePage/>} />
            <Route path="/shop/:categoryid" element = {<ShopByCategory/>} />
        </Routes>
    )
}

export default AppRoute;