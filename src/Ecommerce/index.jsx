import React, { useEffect, useState } from 'react'
import Body from './Body'
import Navbar from './Navbar'
import axios from "axios";
import Filter from '../Components/Filter';
import Addtocart from '../Components/Addtocart';
import { withCommas } from '../Components/helper'
import dayjs from 'dayjs';
import { increment,decrement} from '../Redux/action/counter';
import { useDispatch,useSelector } from 'react-redux';
import { Route,Routes } from 'react-router-dom';
import { ProductDetail } from '../Components/ProductDetail';
import { fetchProduct,filteredProduct } from '../Redux/action/product';
import { Checkout } from '../Components/Checkout.jsx';

const Ecommerce = (props) => {

  const dispatch = useDispatch();
  // const filteredProducts=useSelector((state)=>state.product);
  // const products = useSelector((state) => state.product.products);
  const filterModal=useSelector((state)=>state.filterModal.display);
  const cartDisplay=useSelector((state)=>state.cartDisplay.display);
  useEffect(() => dispatch(fetchProduct()) , []);
  return (
    <>
      {filterModal?<Filter />:null}
      {cartDisplay ? <Addtocart/> : null}
      <Navbar/>
      <Routes>
      <Route path='/' element={<Body/>}></Route>
      <Route path='/ProductDetail' element={<ProductDetail/>}></Route>
      <Route path='/Checkout' element={<Checkout/>}></Route>
      </Routes>
    </>
  )
}
export default Ecommerce;