import dayjs from 'dayjs';
import React from 'react'
import { useSelector } from 'react-redux'

export const ProductDetail = () => {
  const productDetail = useSelector((state) => state.productDisplay.product_detail);
  return (
    <div className="container productdetail-container shadow p-3 mb-5 bg-white rounded"  >
      <div className="row" style={{ padding: "4rem" }}>
        <div className="col-md-4" style={{ padding: "1rem", display: "flex" }}>
          <div className="productdetail-image " style={{ width: "100%" }}>
            <img src={`https://electronic-ecommerce.herokuapp.com/${productDetail.image}`} alt={`${productDetail.name}`} style={{ width: "100%" }} />
          </div>
        </div>
        <div className="col-md-4" style={{ padding: "1rem" }}>
          <h4>{productDetail.name}</h4>
          <p>Stock: {productDetail.stock}</p>
          <p>Rating: .....</p>
          <p>Created: {dayjs(productDetail.createDate).format("DD-MM-YYYY")}</p>
          <p>Category: {productDetail.category}</p>
        </div>
        <div className="col-md-4" style={{ padding: "1rem" }}>
          <p>Price: {productDetail.price}</p>
          
          <label htmlFor="quantity">Choose a car:</label>
          <select id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="audi">4</option>
          </select>
          <p>Quantity: </p>
        </div>
      </div>
    </div>
  )
}
