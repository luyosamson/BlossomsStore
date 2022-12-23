import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from './Hero'
import Welcome from "./Welcome";
import Featured from "./Featured";



function Home() {
  return (
    <>
  <Navbar/>
  <Hero />
  <Welcome />
  <Featured />

  <Footer/>
    </>
  );
}

export default Home;