import React from "react";
import Footer from "../footer/Footer";
import Hero from '../hero/Hero'
import Welcome from "../welcome/Welcome";
import Featured from '../featured/Featured'
import Flower from "../flower/Flower";
import Plant from "../plants/Plant";
import PlantPage from '../plantpage/PlantPage'
import './Home.css'




function Home() {
  return (
    <div className="home">

  <Hero />
  <Welcome />
  <Featured />



 
    </div>
  );
}

export default Home;