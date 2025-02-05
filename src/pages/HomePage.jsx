import TopHeader from "./components/common/TopHeader";
import Footer from "./components/common/Footer";
import Navigation from "./components/homepage/Navigation";
import FeaturedCategory from "./components/homepage/FeaturedCategory";


const HomePage = () => {
  return (
    <>
      <TopHeader />
      <Navigation />
      <FeaturedCategory />
      <Footer />
    </>
  );
};

export default HomePage;
