import React,{useState} from "react";
import { Routes,Route, Router } from "react-router-dom";
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
import Dashboard from "./dashboard/Dashboard";
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
        <Route  exact path="/"> 
        <Home/> 
        </Route>
        <Route  exact path="/flower">
          <Flower handleClick={handleClick}/>
        </Route>
          
        <Route  exact path="/plant">
          <Plant handleClick={handleClick}/>
        </Route>
        <Route  exact path="/seller">
          <Seller/>
        </Route>
        <Route  exact path="/signup"> 
        <Signup/>
        </Route>
        <Route  exact path="/search">
          <Search/>
        </Route>
        <Route  exact path="/cart">
        <Cart cart={cart} 
        setCart={setCart}
        handleChange={handleChange}/>
        </Route>
        <Route  exact path="/plantpage">
          <PlantPage/>
        </Route>
        <Route  exact path="/seller/dashboard"> 
        <Dash/> 
        </Route>
        <Route exact path='/seller/dashboard/Sellerplants'> 
        <Sellerplants />
        </Route> 
        <Route exact path='/seller/dashboard/Sellerflowers'>
          <Sellerflowers />
          </Route>
        <Route exact path='/seller/dashboard/NewPlantForm'>
          <NewPlantForm />
          </Route> 

      </Routes>
      

       <Footer/>
      

   
    </div>
  );
}

export default App;



