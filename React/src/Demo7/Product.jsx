import filledHeart from "../assets/heart_filled.png";
import heartEmpty from "../assets/heart_empty.png";
import { ProductProvider } from "./App";
import { useContext, useState } from "react";

const Product = ({
  Name,
  Image,
  Price,
  Comment,
  Discount,
  Id,
  Likes,
  showText,
} = props) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  const { addedProducts, setAddedProducts } = useContext(ProductProvider);
  const AlreadyAdded = addedProducts.find((existingId) => {
    return existingId === Id;
  });
  const handleCard = () => {
    if (AlreadyAdded) {
      const listWithoutThisProduct = addedProducts.filter((productID) => {
        return productID !== Id;
      });
      setAddedProducts(listWithoutThisProduct);
    } else {
      setAddedProducts([...addedProducts, Id]);
    }
  };
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
          <div className="d-flex  justify-content-between align-items-center ">
            <h5 className="card-title">{Name}</h5>
            <p className="text-success fw-bold">
              {isLiked ? Likes + 1 : Likes} jaime
            </p>
          </div>
          {showText && <p className="card-text">{Comment}</p>}
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
        <div className="d-flex m-2 justify-content-between align-items-center">
          <button
            onClick={handleCard}
            className={`btn  ${AlreadyAdded ? "btn-danger" : "btn-primary"}`}
          >
            {AlreadyAdded ? "remove from" : "add to card"}
          </button>
          <img
            onClick={handleLike}
            src={isLiked ? filledHeart : heartEmpty}
            style={{ width: 25, height: 25, cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
