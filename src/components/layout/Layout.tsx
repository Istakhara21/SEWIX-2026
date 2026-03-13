import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        <Sidebar />
      </div>
      <Outlet />
      <div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
