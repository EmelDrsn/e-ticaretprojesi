export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b">
      <h1 className="font-bold text-lg">LOGO</h1>
      <nav className="flex gap-4">
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
}
