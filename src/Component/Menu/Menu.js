import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


import "./Menu.css"

const Menu = () => {

const {users, logOut} = useAuth();
  
    return (
        <div className="MenuBar-container">
          
        <div className="container">
        <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-10">
        <div className="menu-container">
        <ul className="d-flex align-items-end justify-content-end">

                  <Link to="/home" className="items">
                    <li>Home</li>
                  </Link>
                  {/* <Link to="/details" className="items">
                    <li>Details</li>
                  </Link> */}
                  <Link to="/doctor" className="items">
                    <li>Doctor</li>
                  </Link>

                  <Link to="/about" className="items">
                    <li>About us</li>
                  </Link>
                  
               { users.email && <p className ="text-white raw" > Hi {users.displayName}  </p>}

                 { 
                  users.email ?

                  <button className ="m-2" onClick = {logOut}> Logout </button>

                  :

                 <Link to="login" className="items">
                    <li>Login</li>
                  </Link>}
                  <Link to="/contact" className="items">
                    <li>Contact us</li>
                  </Link>
                 
        </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Menu;