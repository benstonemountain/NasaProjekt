import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SpaceObjectCardlist from "./Components/NearEarthObjects/SpaceObjectCardlist";
import Header from "./Components/Headers/Header";
import SpaceObjectHeader from "./Components/NearEarthObjects/SpaceObjectHeader";
import Home from "./Components/Home/Home";
import ImageTop from "./Components/PictureOfTheDay/ImageTop";
import Footer from "./Components/Footer";
import HeaderInit from "./Components/Headers/HeaderInit";

function App() {
  
  return (
    <div className="App">
      <HeaderInit/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spaceobjectheader" element={<SpaceObjectHeader />} />
        <Route path="/imagetop" element={<ImageTop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
