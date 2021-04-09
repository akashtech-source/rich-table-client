import React, { useEffect, useState } from 'react';
import Beakfast from '../components/Breakfast/Beakfast';
import Footer from '../components/Header/Footer/Footer';
import MainContent from '../components/MainContent/MainContent';
import WhyUs from '../components/WhyUs/WhyUs';

const Dinners = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/meals')
        .then(res => res.json())
        .then(data => setMeals(data));
    }, []);
    const foods = meals.filter(food => food.category ==='dinner');
    return (
        <div>
            <MainContent></MainContent>
            
            {
                foods.map(food => <Beakfast food={food}></Beakfast>)
            }
              <div class="d-grid gap-2 col-3 mx-auto">
                <button class="btn btn-secondary" type="button">Checkout your food</button>
  
            </div>
            <WhyUs></WhyUs>
            <Footer></Footer>
        </div>
    );
};

export default Dinners;