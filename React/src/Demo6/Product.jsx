import filledHeart from "../assets/heart_filled.png";
import heartEmpty from "../assets/heart_empty.png";
import { useState } from "react";

const Product = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const priceAfterDiscount = (props.Price * props.Discount) / 100;

  return (
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
          <p className="text-success fw-bold">
            {isLiked ? props.Likes + 1 : props.Likes} jaime
          </p>
        </div>
        <p className="card-text">{props.Comment}</p>
        {props.Discount > 0 ? (
          <div>
            <span className="text-decoration-line-through">{props.Price}$</span>
            <span className="text-danger m-2">{priceAfterDiscount}$</span>
          </div>
        ) : (
          <span>{props.Price}$</span>
        )}
      </div>
      <div className="d-flex m-2 justify-content-between align-items-center">
        <button className=" btn btn-primary">Ajouter au panier</button>
        <img
          onClick={handleLike}
          src={isLiked ? filledHeart : heartEmpty}
          style={{ width: 25, height: 25, cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Product;
