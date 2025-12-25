import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <Link to="/">Ana Sayfa</Link>
      <Link to="/products">Ürünler</Link>
      <Link to="/cart">Sepet</Link>
    </nav>
  );
}
