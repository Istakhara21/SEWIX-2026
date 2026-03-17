import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import CategoryPage from "./CategoryPage";

const HomePage = () => {
  //calling the hook (useProducts)
  const { products, loading, error } = useProducts(); // destructuring

  //loading state
  if (loading) return "data is loading";

  //error state
  if (error) return error;



  return (
    <div>
      <div>
        <CategoryPage />
      </div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={(p) => console.log(p.name)}
        />
      ))}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={(p) => console.log(p.name)}
        />
      ))}
    </div>
  );
};

export default HomePage;
