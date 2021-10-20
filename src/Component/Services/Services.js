import React, { useEffect, useState } from 'react';


import Service from '../Service/Service';
import "./Services.css"

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    }, []);

    return (

      <>

<div className="container">
            <div className ="mt-3"> <h1> Health Care Specialized Unit</h1></div>
            <div class="row g-4 card-group p-3">
            {
                services.map(service => <Service
                key = {service.id}
                service = {service}
                ></Service>
                    
                )
            }
            </div>
        </div>
      </>
      
      


    );
};

export default Services;





