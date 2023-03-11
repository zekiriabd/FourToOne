import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Product from "./Product";
import { addProduct, getProducts } from "./services/products";

const Cards = () => {
  const [searchParams] = useSearchParams();
  const addedProducts = searchParams.get("addedProducts").split(",");
  const products = getProducts();

  const cartProducts = products.filter((element) => {
    return addedProducts.includes(element.Id);
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
