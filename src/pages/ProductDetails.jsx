import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Showing details for Product ID: {id}</p>
    </div>
  );
}
