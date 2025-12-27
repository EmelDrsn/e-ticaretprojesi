import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Switch, Route, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import Products from "./pages/Products";
import Cart from "./pages/Cart";



function App() {
  const handleToast = () => {
    toast.success("Hoş geldin! 🎉", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  return (
    <div>
      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/products">Ürünler</Link>
        <Link to="/cart">
          Sepet <ShoppingCart size={18} />
        </Link>
        <button onClick={handleToast}>Bildirim Gönder</button>
      </nav>

      <Switch>
        <Route exact path="/">
          <h2>Ana Sayfa</h2>
        </Route>

        <Route path="/products">
          <Products />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route>
          <h2>404 - Sayfa Bulunamadı</h2>
        </Route>
      </Switch>

      <ToastContainer />
    </div>
  );
}

export default App;
