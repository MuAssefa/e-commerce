import React, { useEffect, useState } from "react";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <a href={`/product/${product._id}`}>{product.name}</a>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
