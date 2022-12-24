import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Flower from "./Flower";
import Plant from "./Plant";
import Seller from "./Seller";
import Navbar from "./Navbar";
import Search from "./Search";
import Cart from "./Cart";
import Signup from "./Signup";
import Footer from "./Footer";

function App() {
 


  return (
    <div>
      <><Navbar/></>
      <Routes>
        <Route  path="/" element={<Home/>}  />
        <Route  path="/flower" element={<Flower />}  />
        <Route  path="/plant" element={<Plant/>}  />
        <Route  path="/seller" element={<Seller/>}  />
        <Route  path="/signup" element={<Signup/>}  />
        <Route  path="/search" element={<Search/>}  />
        <Route  path="/cart" element={<Cart/>}  />
      </Routes>
       <Footer/>

   
    </div>
  );
}

export default App;
