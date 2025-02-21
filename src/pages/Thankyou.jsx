import TopHeader from "./components/common/TopHeader";

import TopMenu from "./components/common/TopMenu";
import Footer from "./components/common/Footer";

import Paymentdetails from "./components/common/paymentdetails";
export default function Thankyou() {
  return (
    <>
      <TopHeader />
      <div className="container-fluid mb-10">
        <div className="row border-top px-xl-5">
          <TopMenu />
        </div>
      </div>

      <Paymentdetails />
      <Footer />
    </>
  );
}
