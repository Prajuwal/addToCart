import "../style/card.css";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
const Card = ({ productData }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="card-div">
      {productData.map((product) => (
        <div key={product.id} className="child-card">
          <img src={product.image} alt={product.title} />
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <div className="product-footer">
            <h2 className="product-price">${product.price}</h2>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
