import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Navbar} from "./components/navbar"
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'
import { ShopContextP } from './context/shop-context';
import {Footer} from './components/footer'
import {Login} from './pages/login/login'

function App()   {

  return (
    <div className="App"> 
      <ShopContextP>
        <Router>
          <Navbar />
          <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/login' element= {<Login/>}/>
          <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextP>
      <Footer />
    </div>
  );
}

export default App;
