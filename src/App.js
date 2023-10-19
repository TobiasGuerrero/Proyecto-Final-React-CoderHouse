import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App" id='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a AeroCool!"}/>} />
            <Route path='/AeroCool/' element={<ItemListContainer greeting={"Bienvenidos a AeroCool!"}/>} />
            <Route path='/AeroCool/categoria/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/AeroCool/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/AeroCool/cart' element={<Cart/>}/>
            <Route path='/AeroCool/checkout' element={<Checkout/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
