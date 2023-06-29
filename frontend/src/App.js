import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from './components/navbar/Navbar'
import AddRestaurant from "./Pages/createRestaurant/AddRestaurant";
import Restaurant from "./Pages/Restaurant/Restaurant";
import Cart from "./Pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/addRestaurant" element={<AddRestaurant />}/>
            <Route path="/restaurant/:id" element={<Restaurant />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
