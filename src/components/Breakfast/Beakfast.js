import React from 'react';
import { Link } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import './Beakfast.css';

const Beakfast = (props) => {
    const {name, detail, price, imageURL, _id} = props.food;
    
    return (
        <div className="main-container">
            
            <div className="meal-container">
                <Link to={`/checkout/${_id}`}>
                <img src={imageURL} alt=""/>
                <h4>{name}</h4>
                <p>{detail}</p>
                <h3>{price}</h3>
                </Link>
            </div>
          
        </div>
    );
};

export default Beakfast;