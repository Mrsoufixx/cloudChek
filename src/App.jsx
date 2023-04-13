import * as React from "react";

import "maplibre-gl/dist/maplibre-gl.css";
import "./App.css";

import Home from "./components/pages/Home";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
