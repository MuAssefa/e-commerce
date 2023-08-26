import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const [product, setProduct] = useState("");
  console.log(product);
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`/api/products/${productId}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <a href="/">Go Back</a>
      <h1>{product.name}</h1>
      <h1>{product.brand}</h1>
      <h1>{product.catagory}</h1>
      <h1>{product.description}</h1>
    </div>
  );
};

export default ProductScreen;
