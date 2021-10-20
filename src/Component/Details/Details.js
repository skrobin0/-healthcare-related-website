import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

const Details = () => {


    const {id} = useParams();

    const [data, setData] = useState([]);

    useEffect (() => {
        fetch("/fakeDetails.json")
        .then(res => res.json())
        .then(data=>setData(data.employee));
    }, [])

    const findData =   data.find(dt => dt.login.id === id)
        console.log(findData);

    

    return (
        <div>
            <Menu></Menu>
            
            
            <div className ="row mx-auto">
                <div className ="col-md-6 col-lg-4 col-sm-12">
                    <div className="cart p-3 m-2 border border">
                        <div className="service img">
                        <img src={findData?.img} alt="category" />
                        </div>
                        <h6 className="mt-4">Department :{findData?.name}</h6>
                       <p className="mt-2">{findData?.description}</p>

                       
                    </div>
                </div>

                <Footer></Footer>
            </div>







        </div>
    );
};

export default Details;