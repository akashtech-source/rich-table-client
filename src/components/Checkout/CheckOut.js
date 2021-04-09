import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Footer from '../Header/Footer/Footer';
import MainContent from '../MainContent/MainContent';
import WhyUs from '../WhyUs/WhyUs';
import './Checkout.css';

const CheckOut = () => {
    const {id} = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(()=> {
        const url = `http://localhost:5000/checkout/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data[0]));
    }, []);

    let [value, setValue] = useState(1)
    const handleIncrease = () => {
        value = value + 1;
        document.getElementById('case-count').value = value;
        document.getElementById('price').innerText = value * 9.99;
    }
    const handleDecrease = () => {
        if(value > 0){
            value = value - 1;
            document.getElementById('case-count').value = value;
            document.getElementById('price').innerText = value * 9.99;
        }
    }
     return (
         <div>
            
        <div className="checkout-container">
        <div className="checkout-text">
            <h2>{meals.name}</h2>
            <p>{meals.detail}</p>
            <h1>$<span id="price">{meals.price}</span></h1>
            <button onClick={handleDecrease} id="increase" class="btn btn-default"><i class="fas fa-minus"></i></button>
            <input id="case-count" type="text" class="form-control text-center input-val" value="1"/>
            <button onClick={handleIncrease} id="decrease" class="btn btn-default"><i class="fas fa-plus"></i></button>
            <NavLink className="btn btn-danger add" to={`/placeorder/${id}`}>Add</NavLink>
        </div>
        <div className="checkout-img">
        <img src={meals.imageURL} alt=""/>
        </div>
        
        </div>
        <Footer></Footer>
        </div>
    );
};

export default CheckOut;