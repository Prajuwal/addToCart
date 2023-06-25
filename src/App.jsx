import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import { getProducts } from "./store/productSlice";

function App() {
  const { data: product, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  if (status === "rejected") {
    return <h1>Something went Wrong!</h1>;
  }

  return <Card productData={product} />;
}

export default App;
