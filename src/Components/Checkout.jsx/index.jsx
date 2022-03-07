import React from 'react';
import * as Yup from "yup";
import { useSelector } from 'react-redux';
import {useFormik} from "formik";
import Validation from '../Error';

const initialValues = {
  name: "",
  email: "",
  address: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Please enter name"),
  email: Yup.string().required("Please enter email"),
  address: Yup.string().required("Please select address"),
});

export const Checkout = () => {
  const cart = useSelector((state) => state.cartProduct.cart_products);
  const Total=useSelector((state)=>state.cartTotal.total_price);
  const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <>
      <form className='p-5' onSubmit={handleSubmit}>
        <div className="form-group pb-3">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" value={values.name}
          onChange={handleChange}/>
          <Validation errors={errors} name="name" />
        </div>
        <div className="form-group pb-3">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" 
          value={values.email}
          onChange={handleChange} />
          <Validation errors={errors} name="email" />
        </div>
        <div className="form-group pb-3">
          <label htmlFor="address">Shipping Address:</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your address" 
          value={values.address}
          onChange={handleChange} />
          <Validation errors={errors} name="address" />
        </div>
        <div className="product_table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
              <tr>
                  <td>Total</td>
                  <td></td>
                  <td>{Total}</td>
                </tr>
            </tbody>
          </table>
        </div>
        <button type="submit" className="btn btn-primary" >Checkout</button>
      </form>
    </>

  )
}
