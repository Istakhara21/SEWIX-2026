import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { type Product } from "../types/index";

const useProductsByCategory = (category: string | undefined) => {
  // three state variable
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //saving unneccessory network request.
    if (!category) {
      setLoading(false);
      return;
    }
    //firestore fetch logic
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // create ref to your collection
        const colRef = collection(db, "products");
        //from the products collection, give me documents where the category field equals this value
        const q = query(colRef, where("category", "==", category));
        const snapshot = await getDocs(q);

        //map over snapshot for data formatting
        const productDetails = snapshot.docs.map((doc) => ({
          ...(doc.data() as Product), //typescript
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
  }, [category]); //re-run if collection changes

  //return your state

  return { products, loading, error };
};

export default useProductsByCategory;
