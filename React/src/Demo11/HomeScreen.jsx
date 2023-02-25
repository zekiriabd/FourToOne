import Product from "./Product.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getProducts } from "./services/products.js";

function HomeScreen() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const products = getProducts();
 
  return (
    <div>
      <nav className="container">
        <Link
          to={"/card?addedProducts=" + selectedProducts.join(",")}
          className="fs-2"
        >
          Products
        </Link>
      </nav>
      <div className="container">
        <div className="row">
          {products.map((singleProduct) => {
            return (
              <Product
                key={singleProduct.id}
                {...singleProduct}
                showTextAndBtn={true}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
