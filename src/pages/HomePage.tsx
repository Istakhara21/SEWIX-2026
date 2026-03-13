import useProducts from "../hooks/useProducts";

const HomePage = () => {
  //calling the hook (useProducts)
  const data = useProducts();

  console.log(data);

  return (
    <div className="font-sans bg-bg min-h-screen">
      <h1 className="text-blue font-bold text-4xl p-8">SEWIX is alive ✓</h1>
      <h1>Hello World</h1>
    </div>
  );
};

export default HomePage;
