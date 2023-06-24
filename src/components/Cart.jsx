import { useSelector } from "react-redux/es/hooks/useSelector";
import "../style/card.css";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const bagItem = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(remove(product));
  };

  return (
    <>
      <h1>Cart</h1>
      <div className="card-div">
        {bagItem.map((product) => (
          <div key={product.id} className="child-cardcart">
            <img src={product.image} alt={product.title} />
            <h1 className="product-title">{product.title}</h1>
            <div className="product-footer">
              <h2 className="product-price">${product.price}</h2>
              <button
                className="remove-from-cart-btn"
                onClick={() => removeFromCart(product.id)}
              >
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cart;
