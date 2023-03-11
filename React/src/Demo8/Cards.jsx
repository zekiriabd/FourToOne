import { Link, useSearchParams } from "react-router-dom";
import Product from "./Product";
import { products } from "./data";
const [a , b] = [1,2]
const Cards = () => {
  const [searchParams] = useSearchParams();
  const addedProducts = searchParams.get("addedProducts").split(",");

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
