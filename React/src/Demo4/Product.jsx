const Product = ({ Name, Image, Price, Comment, Discount } = props) => {
  return (
    <>
      <div className="card mx-4 my-4" style={{ maxWidth: "18rem" }}>
        <img
          className="card-img-top"
          style={{ width: "100%", height: 230 }}
          src={Image}
          alt={Name}
        />
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>
          <p className="card-text">{Comment}</p>
          {Discount > 0 ? (
            <div>
              <span className="text-decoration-line-through">{Price}$</span>
              <span className="text-danger m-2">
                {(Price * Discount) / 100}$
              </span>
            </div>
          ) : (
            <span>{Price}$</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
