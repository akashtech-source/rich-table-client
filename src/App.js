import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Beakfast from './components/Breakfast/Beakfast';
import Header from './components/Header/Header';
import BackgroundImg from '../src/bannerbackground.png';
import Lunch from './components/Lunch/Lunch';
import Dinners from './Dinners/Dinners';
import CheckOut from './components/Checkout/CheckOut';
import Login from './components/Login/Login';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <div>
      <p>{loggedInUser.name}</p>
      <Router>
          <Header></Header>
            
        <Switch>
          <Route path = "/home">
            <Home/>
          </Route>
          <Route path = "/beakfast">
            <Beakfast></Beakfast>
          </Route>
          <Route path = "/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path = "/dinner">
            <Dinners></Dinners>
          </Route>
          <Route path = "/checkout/:id">
            <CheckOut></CheckOut>
          </Route>
          <PrivateRoute path = "/placeorder/:id">
            <PlaceOrder/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "/admin">
            <Admin/>
          </Route>
        </Switch>
      </Router>
      
    </div>
    </UserContext.Provider>
  );
}

export default App;
