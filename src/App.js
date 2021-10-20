import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Component/Home/Home';
import Details from './Component/Details/Details';

import Error from './Component/Error/Error';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import ExtraDetial from './Component/ExtraDetial/ExtraDetial';
import AuthProvider from './Component/Context/AuthProvider';
import PrivateRoute from './Component/Private/PrivateRoute';
import Login from './Component/Login/Login';


function App() {
  return (
    <div className="App">
     

  
  <AuthProvider>
  <Router>

<Switch>

<Route exact path="/">
  <Home></Home>
</Route>

<Route  path="/home">
  <Home></Home>
</Route>

<PrivateRoute  path="/details/:id">
  <Details></Details>
</PrivateRoute>

<PrivateRoute  path="/doctor">
  <ExtraDetial></ExtraDetial>
</PrivateRoute>

<Route  path="/login">
  <Login></Login>
</Route>

<Route  path="/contact">
  <Contact></Contact>
</Route>

<Route  path="/about">
  <About></About>
</Route>

<Route  path="/*">
  <Error></Error>
</Route>

</Switch>

</Router>
  </AuthProvider>
  

     
    </div>
  );
}

export default App;
