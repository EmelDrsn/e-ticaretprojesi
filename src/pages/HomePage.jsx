import ProductCard from "../components/ProductCard";

export default function HomePage() {
  return (
    <section className="grid grid-cols-2 gap-3 py-4">
      <ProductCard img="/img/p1.png" title="Product 1" price="29" />
      <ProductCard img="/img/p2.png" title="Product 2" price="49" />
    </section>
  );
}
