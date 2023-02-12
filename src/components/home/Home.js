import React from "react";
import Footer from "../footer/Footer";
import Hero from '../hero/Hero'
import Welcome from "../welcome/Welcome";
import Featured from '../featured/Featured'
import Flower from "../flower/Flower";
import Plant from "../plants/Plant";
import PlantPage from '../plantpage/PlantPage'
import Reviews from "../platformreviews/Reviews";
import './Home.css'
import ReviewsPage from "../reviewpage/ReviewsPage";




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