import React, { useState } from 'react'
import { withCommas } from '../helper'
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartItem } from '../../Redux/action/cartItem';
import { productDetail } from '../../Redux/action/product';


const ProductDisplay = ({ product, id, name, price, stock, image, release}) => {
  
  const dispatch= useDispatch();
  const Items= useSelector((state)=>state.cartProduct.cart_products);

  const [itemStock, setItemStock] = useState(stock);

  const handleAddtoCart = () => {
    let quantity = 1;
    let updated = [...Items];
    let index = Items.findIndex((item) => item.id === id);
    if (index > -1) {
      updated[index].quantity = Items[index].quantity + 1;
    } else {
      updated = [...Items, { id, name, price, stock, image, release, quantity }];
    }
    dispatch(cartItem(updated));
  }
  return (
    <>
      <div className="col-lg-3" style={{ 'height': '360px', marginBottom: "2rem" }}>
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{ "padding": "1.5rem", "width": "100%", 'border': 'none' }}>
          <div className="card-image" style={{ 'height': '175px', display: "flex", justifyContent: "center", paddingBottom: '1rem' }} >
            <Link to={`/ProductDetail`}><img className='image'
              src={`https://electronic-ecommerce.herokuapp.com/${image}`}
              alt="Product Photo"
              onClick={()=>dispatch(productDetail(product))}
              style={{ "objectFit": "cover", maxHeight: "100%" }} /></Link>

          </div>
          <div className="product-description-container">
            <div style={{ 'display': 'flex', flexDirection: 'column' }}>
              <div className='product-selector form-control' style={{ 'height': "100%", width: '25%', display: 'flex', 'padding': '0' }}>
                <button
                  style={{ 'border': 'none', background: 'white', width: '30%' }}
                >-</button>
                <input
                  type="text"
                  style={{ 'width': '40%', border: "none" }}
                />
                <button
                  style={{ 'border': 'none', background: 'white', width: '30%' }}
                >+</button>
              </div>
              <div>
                <p className="product-name">{name}</p>
                <p className="product-price">{withCommas(price)}<span style={{ "float": "right", 'color': "green" }}>Stocks left: {itemStock}</span></p>
                <p className="product-date">Released On: {dayjs(release).format("DD-MM-YYYY")}</p>
              </div>

            </div>
          </div>
          <button className="btn btn-primary btn-sm" disabled={itemStock != 0 ? false : true} onClick={handleAddtoCart}>Add to cart</button>
        </div>
      </div>

    </>

  )
}
export default ProductDisplay;
