import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="2xl:flex 2xl:justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
