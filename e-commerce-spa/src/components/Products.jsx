import React, { useState } from "react";
import productList from "../data/ProductList.json";
import { useNavigate } from "react-router";

function Products() {
  const navigate = useNavigate();
  const [productsToDisplay, setProducts] = useState(productList);
  const [lightingProducts, setLightingProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRating, setProductRating] = useState("");
  const [productImage, setProductImage] = useState("");

  /*const checkFormValidity = () => {
    return (
      productName !== "" &&
      productDescription !== "" &&
      productPrice !== "" &&
      productRating !== "" &&
      productImage !== ""
    );
  }; */

  // Adding Products
  //const handleSubmit = (event) => {
  // if (!checkFormValidity) {
  //   return;
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      productRating: productRating,
      productImage: productImage,
    };
    console.log("Submitted", newProduct);
    const newProductList = [newProduct, ...productsToDisplay];
    setProducts(newProductList);

    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductRating("");
    setProductImage("");
  };

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

  // the image label is still unfinished. not sure on how to allow passing URLs for the user
  return (
    <section>
      <form onSubmit={handleSubmit} className="form-css">
        <div>
          <label>
            Product
            <input
              name="productName"
              type="text"
              placeholder="Product"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </label>

          <label>
            Description
            <input
              name="productDescription"
              type="text"
              placeholder="Description"
              value={productDescription}
              onChange={(e) => {
                setProductDescription(e.target.value);
              }}
            />
          </label>

          <label>
            Price
            <input
              name="productPrice"
              type="number"
              placeholder="Price"
              value={productPrice}
              onChange={(e) => {
                setProductPrice(e.target.value);
              }}
            />
          </label>

          <label>
            Rating
            <input
              name="productRating"
              type="number"
              placeholder="Rating"
              value={productRating}
              onChange={(e) => {
                setProductRating(e.target.value);
              }}
            />
          </label>

          <label>
            Image
            <input
              name="productImage"
              type="text"
              placeholder="image"
              value={productImage}
              onChange={(e) => {
                setProductImage(e.target.value);
              }}
            />
          </label>
        </div>
        <button type="submit">Add Product</button>
      </form>

      <h1 className="my-products">Products List</h1>

      <div className="products-container">
        {productsToDisplay.map((product) => (
          <div key={product.id} className="product-item">
            <img
              className="image-products"
              src={product.thumbnail}
              alt={product.title}
              onClick={() => {
                navigate(`/details/${product.id}`);
              }}
            />
            <div className="productsText">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
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
  );
}

export default Products;
