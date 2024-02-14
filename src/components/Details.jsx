import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import productList from "../data/ProductList.json";

function Details() {

  const { productId } = useParams(); 
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {
    const product = productList.find((product) => product.id === parseInt(productId));
    setSelectedProduct(product);
  }, [productId]);
  
  const deleteProduct = (productId) => {
    const newList = productList.filter((product) => product.id !== Number(productId));
    setSelectedProduct(null); 
     
  };

  return (
    <div>
      {selectedProduct ? (
        <div key={selectedProduct.id}>
          <img src={selectedProduct.thumbnail} alt={selectedProduct.title} /> 
          <h3>{selectedProduct.title}</h3>
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.price}</p>
          <p>Rating: {selectedProduct.rating}</p>
          <button onClick={() => deleteProduct(selectedProduct.id)}>Delete</button>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default Details;
