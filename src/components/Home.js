import React from "react";
import Footer from "./Footer";
import Hero from './Hero'
import Welcome from "./Welcome";
import Featured from "./Featured";
import Flower from "./Flower";
import Plant from "./Plant";




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