import React from 'react';
import './Footer.css';
import footerLogo from '../../../logo2.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <img src={footerLogo} alt=""/>
            <div className="footer-text1">
                <p>About Online Food</p>
                <p>Read our blog</p>
                <p>Signup to deliver</p>
                <p>Add your restaurant</p>
            </div>
            <div className="footer-text2">
                <p>About Online Food</p>
                <p>Read our blog</p>
                <p>Signup to deliver</p>
                <p>Add your restaurant</p>
            </div>
            <div className="social-media">
            <a href="https://www.facebook.com/farhan.ahmedii.9"><i class="fab fa-facebook"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/zahirul-islam-akash-a60832203/"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    );
};

export default Footer;