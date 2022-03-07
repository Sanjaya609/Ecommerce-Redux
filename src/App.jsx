import React, { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Ecommerce from './Ecommerce'
import store  from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
    <Ecommerce />
    </Provider>
    </BrowserRouter>
    
    </>
  )
}

export default App
