import React from 'react'
import Navbar from '../components/Navbar'
import Products_items from '../components/Product'

function Cart() {
  return (
    <div>
        <Navbar/>
        <center>
        <h1>Cart management system</h1>
        </center>
     
      <Products_items/>
      
      
    </div>
  )
}

export default Cart
