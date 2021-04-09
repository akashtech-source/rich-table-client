import React, {useContext} from 'react';
import loginBanner from '../../logo.png';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import BackgroundImg from '../../bannerbackground.png';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                var token = credential.accessToken;
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email}
                setLoggedInUser(signedInUser);
                console.log(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                // ...
            });
    }

    return (
        <div>
            <img src={BackgroundImg} alt=""/>
            <div className="login-banner">
                <img src={loginBanner} alt=""/>
                <br/>
                <input className="form-control" type="text" placeholder="Enter your email"/>
                <br/>
                <input className="form-control" type="password" name="" placeholder="Enter your password"/>
                <br/>
                <button className="btn btn-danger">Login</button>
                
                <div className="login-method">
                <button onClick={handleGoogleSignIn} id="google" type="button" class="btn btn-outline-secondary">Continue With Google</button>
                <br/>
                <button type="button" id="facebook" class="btn btn-outline-secondary">Continue With Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;