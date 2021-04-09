import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import CustomerDetailsForm from '../CustomerDetailsForm/CustomerDetailsForm';
import Login from '../Login/Login';
import './PlaceOrder.css';
import Footer from '../Header/Footer/Footer';
const PlaceOrder = () => {
    const {id} = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(()=> {
        const url = `http://localhost:5000/placeorder/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data[0]));
    }, []);
    console.log(meals);
    return (
        <div>
        <div className='placeorder-container'>
            <div className="place-form">
            <h3>Edit Delivery Details</h3>
            <br/>
            <CustomerDetailsForm></CustomerDetailsForm>
            </div>
            <div className="order-history">
                <p>Picked From Gulshan Plaza Rastaura GPR</p>
                <p>Arriving in 20-30 minute</p>
            </div>
            <div className="place-product">
            <div className="ordered-product">
            <img src={meals.imageURL} alt=""/>
            <p>{meals.name}</p>
            <h4>{meals.price}</h4>
            </div>
            </div>
            <div className="pricing">
                <h5 id="subtotal">Subtotal: <span>{meals.price}</span> </h5>
                <h5 id="tax">Tax: <span>{meals.price}</span></h5>
                <h5 id="delivery-fee">Delivery Fee: <span>{meals.price}</span> </h5>
                <h5 id="total">Total: <span>{meals.price}</span></h5>
               <button id="order-button" className="btn btn-danger">Place Order</button>
            </div>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;