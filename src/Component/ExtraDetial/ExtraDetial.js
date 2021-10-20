import React, { useEffect, useState } from 'react';

import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import "./ExtraDetial.css"
const ExtraDetial = () => {


    const [Extras, setExtras] = useState([]);

    useEffect(() => {
        fetch('./unitData.json')
        .then(res=> res.json())
        .then(data=>setExtras(data))
    }, []);

    return (
        <div>
            <div>
                <Menu></Menu>
            </div>
            
            <div className="container w-100 m-auto p-5">
                <div className="prevention d-flex justify-content-center p-5">
                    <img className ="tt"
                    src="https://i.ibb.co/Q7wBQxH/Hospital-ward-intensive-care-unit-graphic-black-white-interior-sketch-illustration-vector.jpg"alt=""/>
                    <h6 className="ms-3 me-3">Special Doctor</h6>
                   <img className = "tt"
                     src="https://i.ibb.co/Q7wBQxH/Hospital-ward-intensive-care-unit-graphic-black-white-interior-sketch-illustration-vector.jpg"alt=""/>
                </div>
                    <h1 className="Prevent-title">Meet With Them</h1>
                    <p>
                        Best doctor in our city
                    </p>

                    <div className="row">
                        {Extras.map((Extra) => (
                    <div key={Extra.id} className="col-md-6 col-lg-4 col-sm-12">
                        <div className="cart p-3 border border">
                        <div className="service img">
                        <img src={Extra.img} alt="category" />
                    </div>
                         <h6 className="mt-4">{Extra.name}</h6>
                        <p className="mt-2">Age : {Extra.sit}</p>
                       
            
                    </div>
                    
                </div>
            ))}
                </div>
                </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ExtraDetial;