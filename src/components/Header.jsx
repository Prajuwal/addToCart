import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Header = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>My Bag {cartProducts.length}</li>
        </Link>
      </ul>
    </>
  );
};

export default Header;
