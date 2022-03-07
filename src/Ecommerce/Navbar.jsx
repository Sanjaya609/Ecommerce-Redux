import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartDisplay } from '../Redux/action/cartdisplay'

import User from '../Resource/User.png'

const Navbar = () => {
  const dispatch= useDispatch();
  const cartItem= useSelector((state)=>state.cartProduct.cart_products);
  const Number= cartItem.length;
  return (
    <nav id='navbar' className="navbar navbar-expand-lg navbar-light bg-primary" style={{ 'justifyContent': 'space-between' }}>
      
      <Link to={`/`}>
      <p className="navbar-brand" href="#" style={{ 'color': 'white', 'paddingLeft': "1rem" }}>Shopmandu</p>
      </Link>
      <div className='col-lg-2 navbar-right'>
        <a href="#" className="Home" style={{ 'textDecoration': 'none', 'color': 'white' }}>Home</a>
        <div className="cart-icon">
          <HiOutlineShoppingCart onClick={()=>dispatch(cartDisplay(true))} style={{ 'height': "30px" }} /><span>{Number}</span>
        </div>

        <img
          src={User}
          className="rounded-circle z-depth-0"
          alt="User image"
          height="30"
        />
      </div>
    </nav>
  )
}
export default Navbar;