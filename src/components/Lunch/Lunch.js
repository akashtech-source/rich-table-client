import React, { useEffect, useState } from 'react';
import Breakfast from '../Breakfast/Beakfast';
import Footer from '../Header/Footer/Footer';
import MainContent from '../MainContent/MainContent';
import WhyUs from '../WhyUs/WhyUs';
const Lunch = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/meals')
        .then(res => res.json())
        .then(data => setMeals(data));
    }, []);
    const foods = meals.filter(food => food.category ==='lunch');
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

export default Lunch;