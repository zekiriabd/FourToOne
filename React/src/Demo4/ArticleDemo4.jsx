import Product from "./Product.jsx";

const products = [
  {
    Name: "Galaxy s10",
    Image:
      "https://d28i4xct2kl5lp.cloudfront.net/product_images/1561966393.59.jpg",
    Price: 430,
    Comment:
      "The Galaxy S10 features a powerful processor, intelligent power and a long-lasting battery that learns your habits and adapts to your screen usage in order to optimize power and performance.",
    Discount: 45,
  },
  {
    Name: "Galaxy s22",
    Image:
      "https://www.gizchina.com/wp-content/uploads/images/2021/07/Samsung-Galaxy-S22-series.jpg",
    Price: 1000,
    Comment:
      "Galaxy S22 Ultra's Pro-grade Camera corrects shake at a 58% wider angle and delivers fast motion sampling to detect movements quickly and precisely, for steady-state clarity in each frame..",
    Discount: 12,
  },
];

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
