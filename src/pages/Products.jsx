import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, title: "Men's T-Shirt", price: 499, image: "https://via.placeholder.com/200" },
  { id: 2, title: "Women's Top", price: 699, image: "https://via.placeholder.com/200" },
  { id: 3, title: "Kids Shirt", price: 399, image: "https://via.placeholder.com/200" }
];

export default function Products() {
  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
