import useProducts from "../hooks/useProducts";

const HomePage = () => {
  //calling the hook (useProducts)
  const { products, loading, error } = useProducts(); // destructuring

  //loading state
  if (loading) return "data is loading";

  //error state
  if(error) return error;

  console.log(products);

  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h1 className="text-blue font-bold text-4xl">{product.name}</h1>
            <h2 className="text-blue font-bold">{product.price}</h2>
            <h2 className="text-blue font-bold">{product.mrp}</h2>
            <h2 className="text-blue font-bold">{product.category}</h2>
            <h2 className="text-blue font-bold">{product.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
