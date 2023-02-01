import "./productPage.css";

const product = {
  Name: "Galaxy s22",
  Image:
    "https://www.gizchina.com/wp-content/uploads/images/2021/07/Samsung-Galaxy-S22-series.jpg",
  Price: 1000,
  Comment:
    "Galaxy S22 Ultra's Pro-grade Camera corrects shake at a 58% wider angle and delivers fast motion sampling to detect movements quickly and precisely, for steady-state clarity in each frame..",
  Discount: 12,
};

function Article() {
  const { Name, Comment, Image, Price } = product;
  return (
    <div className="product-container">
      <div className="article">
        <img src={Image} alt={Name} />
        <div>
          <h5>{Name}</h5>
          <p>{Comment}</p>
          <span>{Price}$</span>
        </div>
      </div>
    </div>
  );
}

export default Article;
