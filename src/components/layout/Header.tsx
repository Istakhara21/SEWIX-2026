import { Link } from "react-router";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
      {/* for mobile view */}
      <div className="lg:hidden flex justify-between">
        <Link to="/">SEWIX</Link>
        <div className="flex justify-around">
          <a href="tel:+919354237363">📞</a>
          <a href="https://wa.me/919354237363">💬</a>
          <Link to="/cart">🛒(2)</Link>
        </div>
      </div>

      {/* for desktop view */}
      <div className="hidden lg:flex justify-between">
        <div className="flex">
          <Link to="/" className="font-bold">
            SEWIX
          </Link>
          <span className="text-sm ml-2">PARTS & ACCESSORIES</span>
        </div>
        <div className="flex ">
          <a href="tel:+919354237363">📞 +91 9354237363</a>
          <a href="https://wa.me/919354237363">💬 Whatsapp</a>
          <Link to="/cart">🛒 Cart(2)</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
