import Product from "./Product.jsx";
import { products } from "./data";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <nav className="container">
        <Link to={"/card"} className="fs-2">
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
                showText={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
