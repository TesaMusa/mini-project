import { useState } from "react";
import { useParams } from "react-router";
import productList from "../data/ProductList.json";

function Details() {
  const [productsToDisplay, setProducts] = useState(productList); // Assuming productList is defined somewhere

  const deleteProduct = (productId) => {
    const newList = productsToDisplay.filter(
      (product) => product.id === productId // Filter out the product with the specified ID
    );
    setProducts(newList);
  };

  return (
    <div>
      {productsToDisplay.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Details;
