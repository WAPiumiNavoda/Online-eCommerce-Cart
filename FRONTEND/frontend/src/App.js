import { BrowserRouter, Route, Routes } from "react-router-dom";

//Screen
import HomeScreen from './components/Screens/HomeScreen';
import CartScreen from './components/Screens/CartScreen';
import ItemScreen from './components/Screens/ItemScreen';

//compnents
import Header from './components/Header';
import Footer from "./components/Footer";
import AddItem from "./Item/AddItem";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/item" element={<ItemScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/items" element={<AddItem/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

   

  );
}

export default App;
