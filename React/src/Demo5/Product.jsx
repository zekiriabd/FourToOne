const Product = (props) => {
  return (
    <>
      <div className="card mx-4 my-4" style={{ maxWidth: "18rem" }}>
        <img
          className="card-img-top"
          style={{ width: "100%", height: 230 }}
          src={props.Image}
          alt={props.Name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.Name}</h5>
          <p className="card-text">{props.Comment}</p>
          {props.Discount > 0 ? (
            <div>
              <span className="text-decoration-line-through">{props.Price}$</span>
              <span className="text-danger m-2">
                {(props.Price * props.Discount) / 100}$
              </span>
            </div>
          ) : (
            <span>{props.Price}$</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
