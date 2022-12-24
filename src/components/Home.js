import React from "react";
import Footer from "./Footer";
import Hero from './Hero'
import Welcome from "./Welcome";
import Featured from "./Featured";



function Home() {
  return (
    <>
  
  <Hero />
  <Welcome />
  <Featured />

  <Footer/>
    </>
  );
}

export default Home;