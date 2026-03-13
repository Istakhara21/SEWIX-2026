import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import CheckoutPage from "./pages/CheckoutPage";
import SearchPage from "./pages/SearchPage";
import Contactpage from "./pages/Contactpage";
import Layout from "./components/layout/layout";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/contact" element={<Contactpage />} />
      </Route>
    </Routes>
  );
}

export default App;
