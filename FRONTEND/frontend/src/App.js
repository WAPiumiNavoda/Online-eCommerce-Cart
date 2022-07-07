import { BrowserRouter, Route, Routes } from "react-router-dom";

//Screen
import HomeScreen from './components/Screens/HomeScreen';
import CartScreen from './components/Screens/CartScreen';
import ItemScreen from './components/Screens/ItemScreen';

//compnents
import Header from './components/MainPages/Header';
import Footer from "./components/MainPages/Footer";
import AddItem from "./components/Item/AddItem";
import WelcomeScreen from "./components/MainPages/WelcomeScreen";
import Login from "./components/MainPages/Login";
import ProductScreen from "./components/Screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/item" element={<ItemScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/items" element={<AddItem/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product" element={<ProductScreen/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

   

  );
}


export default App;
