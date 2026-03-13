import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { type Product } from "../types/index";

const useProducts = () => {
  // three state variable
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //firestore fetch logic
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // create ref to your collection
        const colRef = collection(db, "products"); //collectionName as string

        //get documents from the collection (raw)
        const snapshot = await getDocs(colRef);

        //map over snapshot for data formatting
        const productDetails = snapshot.docs.map((doc) => ({
          ...doc.data() as Product, //typescript
          id: doc.id, //here doc.id override the internal id
        }));

        setProducts(productDetails);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    // call the function
    fetchProducts();
  }, []); //re-run if collection changes

  //return your state

  return { products, loading, error };
};

export default useProducts;
