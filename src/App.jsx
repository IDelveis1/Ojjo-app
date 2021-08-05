import React from "react";
import "./scss/app.scss";
import CatalogPage from "./pages/CatalogPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BurgerPopup from "./components/BurgerPopup";
import { useSelector } from "react-redux";

function App() {

  const headerPopup = useSelector(({ipods}) => ipods.headerPopup);

  return (
    <div className="wrapper">
      <Header />
      { headerPopup 
            ? <BurgerPopup /> 
            : <div>
              <CatalogPage />
              <Footer />
              </div> 
      }
      
    </div>
  );
}

export default App;
