import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {

    const {name, sit, img, id, description} = service;

    return (
        <>
             <div className="col-md-4 col-sm-12">
                        <div class="card">
                        <img src={img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h4 class="card-title">{name}</h4>
                        <h4 class="card-text">Total sit :{sit}</h4>
                        <p class="card-text">{description.slice(0, 75)}</p>
                        <Link to={`/details/${id}`}>
                        <button className="btn btn-primary">Details</button>
                        </Link>
                        </div>
                    </div>
                    </div>

        </>
    );
};

export default Service;