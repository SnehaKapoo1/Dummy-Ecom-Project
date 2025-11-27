import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: 15,
      borderRadius: 10,
      width: 220
    }}>
      <img src={product.image} width="100%" alt="" />

      <h3>{product.title}</h3>
      <p>₹{product.price}</p>

      <Link to={`/products/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}
