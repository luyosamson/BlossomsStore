import React from "react";
import Hero from '../hero/Hero'
import Welcome from "../welcome/Welcome";
import './Home.css'
import ReviewsPage from "../reviewpage/ReviewsPage";
import Aboutus from "../aboutus/Aboutus";
import FeaturedPage from '../featuredpage/FeaturedPage'






function Home({handleClick}) {
  return (
    <div className="home">

  <Hero />
  <Welcome />
  <FeaturedPage/>
  <Aboutus />
  <ReviewsPage/>
    </div>
  );
}

export default Home;