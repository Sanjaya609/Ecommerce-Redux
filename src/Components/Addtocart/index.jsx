import React, { useEffect, useState } from 'react'
import { Modal, Container,Row,Col,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartDisplay } from '../../Redux/action/cartdisplay';
import { cartItem, cartTotal } from '../../Redux/action/cartItem';
import { withCommas } from '../helper';

const Addtocart = () => {
  const dispatch= useDispatch();
  const cart= useSelector((state)=>state.cartProduct.cart_products);
  const Total=useSelector((state)=>state.cartTotal.total_price)
  
  useEffect(()=>{
    let added=0;
    cart.forEach((item)=>{
      let price=item.price.slice(1);
      console.log(price);
      added+=price*item.quantity;
    });
    console.log(added);
    dispatch(cartTotal(added));
  }
  ,[cart]);
  return (
    <Modal show={cartDisplay} onHide={()=>dispatch(cartDisplay(false))} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Items Added
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {cart.length > 0 ?
            <CartItem/>
          : <span>Nothing in the cart!</span>}
          {console.log(cart)}

        </Container>
      </Modal.Body>
      <Modal.Footer style={{ 'flexDirection': 'column' }}>
        <p>Total Amount: <span>${withCommas(Total)}</span> </p>
        {Total!=0?<Link to={`/Checkout`}><Button onClick={()=>dispatch(cartDisplay(false))} disabled={Total!= 0 ? false : true} >Checkout</Button></Link>:null}
        
      </Modal.Footer>
    </Modal>
  )
}
export default Addtocart;


function CartItem(){
  const dispatch=useDispatch();
  const cart=useSelector((state)=>state.cartProduct.cart_products);
  const DeleteCartItem=(id)=>{
      const updatedCartItem = cart.filter(item => item.id != id);
      console.log(updatedCartItem);
      dispatch(cartItem(updatedCartItem));
  }
  return (
    cart.map((item) =>
        <Row key={item.id} style={{ 'padding': "0.5rem" }}>
            <Col xs={12} md={8} style={{ 'display': 'flex' }}>
                <div className='cart-item-image' style={{ 'width': '60px', marginRight: "1rem", display: 'flex', alignItems: 'center' }}>
                    <img src={`https://electronic-ecommerce.herokuapp.com/${item.image}`} alt="laptop" style={{ 'width': '100%' }} />
                </div>
                <div className="cart-product-info" style={{ 'display': 'flex', 'flexDirection': 'column' }} >
                    <p className='cart-product-name'>{item.name}</p>
                    <p className='cart-product-price' >{withCommas(item.price)}</p>
                </div>
            </Col>
            <Col xs={6} md={4} style={{ 'display': 'flex', 'justifyContent': 'end', 'flexDirection': 'column' }}>
                <div className="cart-item-number" style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                    <p>item:<span>{item.quantity}</span></p>
                </div>
                <div className="cart-item-delete-btn" style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => DeleteCartItem(item.id)}>Delete Item</button>
                </div>
            </Col>
        </Row>)
)
}