import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      padding: "15px",
      background: "#eee",
      display: "flex",
      gap: "20px",
      fontSize: "18px"
    }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
