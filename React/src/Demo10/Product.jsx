const Product = (props) => {
  const AlreadyAdded =
    props.selectedProducts &&
    props.selectedProducts.find((existingId) => {
      return existingId === props.Id;
    });
  const handleCard = () => {
    if (AlreadyAdded) {
      const listWithoutThisProduct = props.selectedProducts.filter(
        (productID) => {
          return productID !== props.Id;
        }
      );
      props.setSelectedProducts(listWithoutThisProduct);
    } else {
      props.setSelectedProducts([...props.selectedProducts, props.Id]);
    }
  };
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
          <div className="d-flex  justify-content-between align-items-center ">
            <h5 className="card-title">{props.Name}</h5>
            <p className="text-success fw-bold">{props.Likes} jaime</p>
          </div>
          {props.showTextAndBtn && <p className="card-text">{props.Comment}</p>}
          {props.Discount > 0 ? (
            <div>
              <span className="text-decoration-line-through">
                {props.Price}$
              </span>
              <span className="text-danger m-2">
                {(props.Price * props.Discount) / 100}$
              </span>
            </div>
          ) : (
            <span>{props.Price}$</span>
          )}
        </div>
        <div className="d-flex m-2 justify-content-between align-items-center">
          {props.showTextAndBtn && (
            <button
              onClick={handleCard}
              className={`btn  ${AlreadyAdded ? "btn-danger" : "btn-primary"}`}
            >
              {AlreadyAdded ? "remove from" : "add to card"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
