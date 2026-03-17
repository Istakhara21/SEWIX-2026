import { Link, useLocation } from "react-router";

const Sidebar = () => {
  const location = useLocation().pathname;
  return (
    <div className="hidden md:flex flex-col fixed top-(--header-height) left-0 w-16 lg:w-60 bg-white border-r">
      <input type="text" defaultValue="Search parts..." className="border-2" />
      <hr className="my-3" />
      <div>Menu</div>
      <br />
      <nav className="flex flex-col">
        <Link to="/" className={location === "/" ? "text-blue" : "text-ink-3"}>
          Home
        </Link>
        <Link
          to="/search"
          className={location === "/search" ? "text-blue" : "text-ink-3"}
        >
          Search
        </Link>
        <Link
          to="/category"
          className={location === "/category" ? "text-blue" : "text-ink-3"}
        >
          Category
        </Link>
        <div className="flex justify-between">
          <Link
            to="/cart"
            className={location === "/cart" ? "text-blue" : "text-ink-3"}
          >
            Cart
          </Link>
          <span className="bg-red rounded-full">3</span>
        </div>
        <Link
          to="/contact"
          className={location === "/contact" ? "text-blue" : "text-ink-3"}
        >
          Contact
        </Link>
      </nav>
      <hr className="my-3" />
      <div>Shop By Part</div>
      <br />
      <div className="flex flex-col">
        <Link to="/category/motors">Motors</Link>
        <Link to="/category/bobbins">Bobbins</Link>
        <Link to="/category/needles">Needles</Link>
        <Link to="/category/belts">Belts</Link>
        <Link to="/category/pcb">PCB & Electronics</Link>
        <Link to="/category/lights">Bulbs & Lights</Link>
      </div>
    </div>
  );
};

export default Sidebar;
