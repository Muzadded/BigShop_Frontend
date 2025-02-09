import TopHeader from "./components/common/TopHeader";
import CategoryMenu from "./components/common/CategoryMenu";
import PageHeader from "./components/common/PageHeader";
import TopMenu from "./components/common/TopMenu";
import Footer from "./components/common/Footer";
import Products from './components/common/Products';
import { useParams } from "react-router-dom";

const ShopByCategory = () => {
    let { categoryid } = useParams();

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
			<Products categoryId={categoryid} />
			<Footer />
        </>
    );
};

export default ShopByCategory;