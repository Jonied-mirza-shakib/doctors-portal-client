import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Rivews from './Pages/Rivews/Rivews';
import Login from './Pages/Login/Login'
import Navbar from './Pages/Shared/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route>
        <Route path='/rivews' element={<Rivews></Rivews>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
