import React, { useState } from "react";
import productList from "../data/ProductList.json";

function Products() {
  const [productsToDisplay, setProducts] = useState(productList);
  const [lightingProducts, setLightingProducts] = useState([]);

  // Deleting products
  const deleteProduct = (productId) => {
    const newList = productsToDisplay.filter(
      (product) => product.id !== productId
    );
    setProducts(newList);
  };

  // Show lighting products
  const showLightingProducts = () => {
    const lighting = productsToDisplay.filter(
      (product) => product.category === "lighting"
    );
    setLightingProducts(lighting);
  };

  return (
    <>
      <section>
        <h1 className="my-products">Products List</h1>

        <div className="products-container">
          {productsToDisplay.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={showLightingProducts}>Show Lighting Products</button>
        {lightingProducts.length > 0 && (
          <div>
            <h2>Lighting Products</h2>
            <ul>
              {lightingProducts.map((product) => (
                <li key={product.id}>{product.title}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}

export default Products;
