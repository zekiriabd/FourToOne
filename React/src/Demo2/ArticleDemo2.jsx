const myProduct = {
  Name: "Galaxy s10",
  Image:
    "https://d28i4xct2kl5lp.cloudfront.net/product_images/1561966393.59.jpg",
  Price: 430,
  Comment:
    "The Galaxy S10 features a powerful processor, intelligent power and a long-lasting battery that learns your habits and adapts to your screen usage in order to optimize power and performance.",
  Discount: 45,
};

function Article() {
  const { Name, Image, Price, Comment, Discount } = myProduct;
  return (
    <div className="card" style={{ maxWidth: "18rem" }}>
      <img
        className="card-img-top"
        style={{ width: "100%" }}
        src={Image}
        alt={Name}
      />
      <div className="card-body">
        <h5 className="card-title">{Name}</h5>
        <p className="card-text">{Comment}</p>
        {Discount > 0 ? (
          <div>
            <span className="text-decoration-line-through">{Price}$</span>
            <span className="text-danger m-2">{(Price * Discount) / 100}$</span>
          </div>
        ) : (
          <span>{Price}$</span>
        )}
      </div>
    </div>
  );
}

export default Article;
