import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h2>Ana Sayfa</h2>
        </Route>

        <Route path="/cart">
          <h2>Sepet</h2>
        </Route>

        <Route path="/products">
          <h2>Ürünler</h2>
        </Route>

        <Route>
          <h2>404 - Sayfa Bulunamadı</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
