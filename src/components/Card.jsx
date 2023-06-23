import "../style/card.css";

const Card = ({ productData }) => {
  return (
    <div className="card-div">
      {productData.map((product) => (
        <div key={product.id} className="child-card">
          <h1>{product.price}</h1>
          <img src={product.image} alt={product.title} />
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default Card;
