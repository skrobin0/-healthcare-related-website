import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

import Units from '../Units/Units';

import Bonus from '../Bonus/Bonus';
import Services from '../Services/Services';




const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Banner></Banner>
            <Services></Services>
            <Units></Units>
        

            <Bonus></Bonus>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;