import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  
  return (
    <>
      <Navbar className="shadow-md"/>
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
