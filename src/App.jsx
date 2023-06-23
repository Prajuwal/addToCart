import { useState, useEffect } from "react";

import "./App.css";
import Card from "./components/Card";
function App() {
  const [product, setProduct] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return <Card productData={product} />;
}

export default App;
