import Home from './components/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/contactus'  element={<ContactUs/>}/>
        <Route path='/ProductList/:productid' element={<ProductDetail/>}></Route>
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
