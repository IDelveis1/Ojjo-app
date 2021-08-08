import React from "react";
import "./scss/app.scss";
import CatalogPage from "./pages/CatalogPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {


  return (
    <div className="wrapper">
      <Header />
      <CatalogPage />
      <Footer />
    </div>
  );
}

export default App;
