import Product from "./Product.jsx";
import products from "./data.js";


function Article() {
  return (
    <div className="container">
      <div className="row">
        {products.map((singleProduct) => {
          return <Product {...singleProduct} />;
        })}
     
      </div>
    </div>
  );
}

export default Article;
