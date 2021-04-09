import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImg from '../../bannerbackground.png';

const MainContent = () => {
    return (
        <div>
            <img src={BackgroundImg} alt=""/>
            <div>
                <h1 className="title">Best Food Waiting For Your Belly</h1>
            </div>
            <div className="search-item">
                <input className="input-field" type="text" placeholder="Search Your Meal"/>
                <button className="search-btn">Search</button>
                <h5 className="offer-text">Save upto 50% for use code RICH50</h5>
            </div>
            <div className="meal-category">
                <Link to="/">Breakfast</Link>
                <Link to="/lunch">Lunch</Link>
                <Link to="/dinner">Dinner</Link>
            </div>
        </div>
    );
};

export default MainContent;