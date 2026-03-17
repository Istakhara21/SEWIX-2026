import { useParams } from "react-router";
import useProductsByCategory from "../hooks/useProductsByCategory";
import ProductCard from "../components/ProductCard";
import { capitalize } from "../lib/utils";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useProductsByCategory(categoryId);

  console.log(products);

  //Before loading to page
  if (!categoryId) return <div>Category not found</div>;

  //loading state
  if (loading) return "data is loading";

  //error state
  if (error) return error;

  if (products.length === 0)
    return <div>No products found in this category</div>;

  return (
    <div>
      <h1>{capitalize(categoryId)}</h1>
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

export default CategoryPage;
