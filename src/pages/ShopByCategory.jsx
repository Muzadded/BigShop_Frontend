import TopHeader from "./components/common/TopHeader";
import Footer from "./components/common/Footer";
import Navigation from "./components/homepage/Navigation";
import { useParams } from "react-router-dom";

const ShopByCategory = () => {
    let { categoryid } = useParams();
    console.log(categoryid);

    return (
        <>
        <TopHeader />
        <Navigation />
        <Products categoryId = {categoryid} />
        <Footer />
      </>
    );
};

export default ShopByCategory;