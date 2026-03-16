import type { Product } from "../types";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void //callback props
};

const ProductCard = ({product, onAddToCart}:ProductCardProps) => {
  return (
    <div className="border-2">
      <div>
        <h2>{product.discount}</h2>
        <img src="" alt="" />
      </div>
      <div>
        <h2>{product.brand}</h2>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <h3>{product.mrp}</h3>
        <button onClick={() => onAddToCart(product)}>+ ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;
