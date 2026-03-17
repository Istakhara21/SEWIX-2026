import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* full width top */}
      <div className="flex flex-1 md:ml-16 lg:ml-60">
        <Sidebar /> {/* left, below header */}
        <main className="flex-1">
          <Outlet /> {/* page content */}
        </main>
      </div>
      <BottomNav /> {/* mobile only bottom */}
    </div>
  );
};

export default Layout;
