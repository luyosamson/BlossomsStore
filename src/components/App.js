import React,{useState} from "react";
import { Routes, Route} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Sellerflowers from './sellerflowers/Sellerflowers';
import Sellerplants from './sellerplants/Sellerplants';
import Dash from "./dash/Dash";
import NewPlantForm from "./newplantForm/NewPlantForm";



function App() {

    const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

 

  const handleChange = (item, d) => {
    
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr])

    }

  return (
    <div>
    <Navbar size={cart.length}/>
    <Routes>
        <Route  path="/" element={<Home/>}  />
        <Route  path="/flower" element={<Flower handleClick={handleClick}/>}
          />
        <Route  path="/plant" element={<Plant handleClick={handleClick}/>}  />
        <Route  path="/seller" element={<Seller/>}  />
        <Route  path="/signup" element={<Signup/>}  />
        <Route  path="/search" element={<Search/>}  />
        <Route  path="/cart" element={<Cart cart={cart} 
        setCart={setCart}
        handleChange={handleChange}/>}
          />
        <Route  path="/plantpage" element={<PlantPage/>} />  
        {/* Dashboard based routes */}

        <Route  exact path="/seller/dashboard" element={<Dash/>}/>
        <Route exact path='/seller/dashboard/Sellerplants' element={<Sellerplants />} />
        <Route exact path='/seller/dashboard/Sellerflowers' element={<Sellerflowers />} />
        <Route exact path='/seller/dashboard/NewPlantForm' element={<NewPlantForm />}/>  

      </Routes>
   
       <Footer/>
      

   
    </div>
  );
}

export default App;



