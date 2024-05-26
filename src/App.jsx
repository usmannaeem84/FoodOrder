import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar,'
import {Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import Cart from "./pages/cart/Cart.jsx"
import Placeorder from './pages/PlaceOrder/Placeorder.jsx'
import LoginPop from './Components/LoginPop/LoginPop.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {

  const [showPop, setshowPop] = useState(false)


  return (
    <>
     {showPop ? 

<LoginPop setshowPop={setshowPop} ></LoginPop>

 : <></> }
<Navbar showPop={showPop} setshowPop={setshowPop} ></Navbar>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/cart" element={<Cart/>} />
  <Route path="/order" element={<Placeorder/>}/>
</Routes>
<Footer></Footer>
    </>
  )
}

export default App
