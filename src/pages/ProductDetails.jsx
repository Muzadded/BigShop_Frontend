import TopHeader from "./components/common/TopHeader";
import CategoryMenu from "./components/common/CategoryMenu";
import PageHeader from "./components/common/PageHeader";
import TopMenu from "./components/common/TopMenu";
import Footer from "./components/common/Footer";
import ProductItems from "./ProductItems";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    let { productid } = useParams();
console.log(productid);
    return (
        <>
            <TopHeader />
			<div className="container-fluid mb-5">
				<div className="row border-top px-xl-5">
                    <CategoryMenu />
                    <TopMenu />
				</div>
			</div>
			<PageHeader />
            <ProductItems productId={productid} />
			<Footer />
        </>
    );
};

export default ProductDetails;