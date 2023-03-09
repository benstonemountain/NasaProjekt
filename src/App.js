import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SpaceObjectCardlist from "./Components/NearEarthObjects/SpaceObjectCardlist";
import Header from "./Components/Header";
import SpaceObjectHeader from "./Components/NearEarthObjects/SpaceObjectHeader";
import Home from "./Components/Home/Home";
import ImageTop from "./Components/PictureOfTheDay/ImageTop";

function App() {
  
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spaceobjectheader" element={<SpaceObjectHeader/>}/>
        <Route path="/imagetop" element={<ImageTop/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
