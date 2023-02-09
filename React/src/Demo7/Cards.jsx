import { useContext } from "react";
import { ProductProvider } from "./App";
import { Link } from "react-router-dom";
import Product from "./Product";
import { products } from "./data";

const Cards = () => {
  const { addedProducts } = useContext(ProductProvider);
  const cartProducts = [];
  addedProducts.forEach((element) => {
    const found = products.find(
      (globalSingleProduct) => globalSingleProduct.Id === element
    );
    if (found) {
      cartProducts.push(found);
    }
  });

  return (
    <div className="container">
      <nav>
        <Link to={"/"} className="fs-2">
          Home page
        </Link>
      </nav>
      <div className="row">
        {cartProducts.map((singleProduct) => {
          return <Product key={singleProduct.Discount} {...singleProduct} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
