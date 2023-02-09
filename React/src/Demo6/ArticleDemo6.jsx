import Product from "./Product.jsx";



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
