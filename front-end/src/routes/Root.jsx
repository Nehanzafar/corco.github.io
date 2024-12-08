import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

const Root = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
