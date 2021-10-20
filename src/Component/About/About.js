import React from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

const About = () => {
    return (
        <div className="about-Container">
            <div className="cl mb-3">
            <Menu></Menu>
            </div>

            <div className="row p-5 ">
                <div className="col-md-4 col-sm-12 mx-auto">
                <h3> Highest quality through specialisation</h3>
                <p>Quality expressed in numbers
              Only 2.5 per cent of our Endo Aktiv patients require a blood transfusion after their hip surgery. This reduces the risk of complications. With conventional surgical methods, this is over 22%</p>
                </div>
                <div className="col-md-4 col-sm-12 fs-5 text-white bg-primary about-text">
                    
                    <p className="p-4">For over three decades, we have specialised in specific areas of medicine - mental health, orthopaedics, neurology, surgery and general medicine. This approach has given us an in-depth understanding of specific disorders and their treatments, enabling us to focus on providing the best treatment options and care for our patients. Each year, our 10,500 employees treat and care for around 320,000 patients at currently 26 locations in Germany and the United Kingdom.

                    Our aim is to give every patient the prospect of a better quality of life. To do so, our reinvestment model ensures we maintain a high standard of quality and are able to be innovative and forward thinking with our infrastructure, clinical delivery and staff development. Additionally, our collaboration with experienced specialists, expert healthcare professionals, clinical partners and patient groups ensures we provide the best-possible experience and care for patients and their families when visiting our hospitals.</p>
                </div>
            </div>




        <Footer></Footer>
        </div>
    );
};

export default About;