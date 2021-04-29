import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Home.css';

import { Link } from 'react-router-dom';
import Breakfast from '../Breakfast/Beakfast'
import WhyUs from '../WhyUs/WhyUs';
import Footer from '../Header/Footer/Footer';
import MainContent from '../MainContent/MainContent';

const Home = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://morning-reef-97614.herokuapp.com/meals')
        .then(res => res.json())
        .then(data => setMeals(data));
    }, []);
    const foods = meals.filter(food => food.category ==='breakfast');
    return (
        <div>
            <MainContent></MainContent>
            
            {
                foods.map(food => <Breakfast food={food}></Breakfast>)
            }
              <div class="d-grid gap-2 col-3 mx-auto">
                <button class="btn btn-secondary" type="button">Checkout your food</button>
  
            </div>
            <WhyUs></WhyUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;