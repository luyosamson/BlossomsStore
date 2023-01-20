import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./home/Home";
import Flower from "./flower/Flower";
import Plant from "./plants/Plant";
import Seller from "./seller/Seller";
import Navbar from "./navbar/Navbar";
import Search from "./search/Search";
import Cart from "./cart/Cart";
import Signup from "./signup/Signup";
import Footer from "./footer/Footer";
import PlantPage from "./plantpage/PlantPage";

function App() {
 


  return (
    <div>
    <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}  />
        <Route  path="/flower" element={<Flower />}  />
        <Route  path="/plant" element={<Plant/>}  />
        <Route  path="/seller" element={<Seller/>}  />
        <Route  path="/signup" element={<Signup/>}  />
        <Route  path="/search" element={<Search/>}  />
        <Route  path="/cart" element={<Cart/>}  />
        <Route path="/plantpage" element={<PlantPage/>} />
      </Routes>
       <Footer/>

   
    </div>
  );
}

export default App;
