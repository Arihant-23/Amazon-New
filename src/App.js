import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } 
from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe("pk_test_51JInmpSBPFeayiAwjQCRp2ZJY6jOKz4jzPp2hI7qHxRbqg0zfuM2qYrxqeJrMCjBZoCzgrfjZT161X8WRqHIaZvE00WOkHmCH2");

function App() {
  const [{}, dispatch ] = useStateValue();
  useEffect(() => {
   //will only run once app component loads...
     auth.onAuthStateChanged(authUser => {
       console.log(' The user is -> ', authUser);
       if(authUser){
         // the user just loggedin
         dispatch({
           type: 'SET_USER',
           user: authUser
         })
       }
       else{
         // the user logged out
         dispatch({
           type: 'SET_USER',
           user: null
         }) 
       }
     })
  }, [])
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/orders">
       <Orders />
      </Route>
      <Route path="/login">
       <Login />
      </Route>
      <Route path="/checkout">
      <Header />
       <Checkout />
      </Route>
      <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
        <Payment />
        </Elements>
      </Route>
        <Route path="/">
        <Header />
      <Home />
      </Route>
      </Switch>
 

    </div>
    </Router>
  );
}

export default App;
