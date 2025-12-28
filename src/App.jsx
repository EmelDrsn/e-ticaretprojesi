import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Her sayfada gözüken üst menü */}
      <Header />

      {/* Sayfa içeriği */}
      <PageContent>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          {/* Şimdilik sadece HomePage var */}
          <Route>
            <h2 className="text-center mt-10 text-xl">
              404 - Sayfa Bulunamadı
            </h2>
          </Route>
        </Switch>
      </PageContent>

      {/* Alt bilgi */}
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
