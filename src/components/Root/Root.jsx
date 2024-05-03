import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <div className=" min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
