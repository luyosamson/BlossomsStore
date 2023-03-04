import React from "react";
import Hero from '../hero/Hero'
import Welcome from "../welcome/Welcome";
import Featured from '../featured/Featured'
import Reviews from "../platformreviews/Reviews";
import './Home.css'





function Home() {
  return (
    <div className="home">

  <Hero />
  <Welcome />
  <Featured />
  <Reviews/>
    </div>
  );
}

export default Home;