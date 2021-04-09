import React from 'react';
import image1 from '../../Image/adult-blur-blurred-background-687824.png';
import image2 from '../../Image/chef-cook-food-33614.png';
import image3 from '../../Image/architecture-building-city-2047397.png';
import './WhyUs.css';
import { Link } from 'react-router-dom';

const WhyUs = () => {
    return (
        <div className="why-container">
            <div className="why-text">
            <h1>Why you choose us</h1>
            <p>Barton waited twenty always repair in within we do. An delighted offering <br/> curiosity my is dashwoods at. Boy prosperous increasing surrounded </p>
            </div>
            <section className="service-container">
                <div className="service">
                <img src={image1} alt=""/>
                <h4>Fast Delivery</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium explicabo molestiae?</p>
                <Link>See More</Link>
                </div>

                <div className="service">
                <img src={image2} alt=""/>
                <h4>A Good Auto Responder</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium explicabo molestiae?</p>
                <Link>See More</Link>
                </div>

                <div className="service">
                <img src={image3} alt=""/>
                <h4>Home Delivery</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium explicabo molestiae?</p>
                <Link>See More</Link>
                </div>
            </section>
        </div>
    );
};

export default WhyUs;