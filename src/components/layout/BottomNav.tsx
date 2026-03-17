import { useLocation, Link } from "react-router";

const BottomNav = () => {
  const location = useLocation().pathname;

  return (
    <nav className="border-2 flex justify-between fixed bottom-0 w-full bg-black md:hidden">
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
      <Link
        to="/contact"
        className={location === "/contact" ? "text-blue" : "text-ink-3"}
      >
        Contact
      </Link>
    </nav>
  );
};

export default BottomNav;
