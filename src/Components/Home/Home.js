import React from 'react';
import { Container, } from 'react-bootstrap';
import useServices from '../../Custom-Hook/useServices';
import image from '../../img/Medical Care.jpg'

const Home = () => {
    const [services, setServices] = useServices([]);
    return (
        <div>
            <Container>
                    <div className="row mt-5 mb-5 bg-info bg-opacity-10 p-4">
                        <div className="col-md-6">
                            <p>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields. Medicine, dentistry, pharmacy, midwifery, nursing, optometry, audiology, psychology, occupational therapy, physical therapy, athletic training, and other health professions are all part of health care. It includes work done in providing primary care, secondary care, and tertiary care, as well as in public health.</p>
                        </div>
                        <div className="col-md-6 ">
                            <img src={image} className="w-75" alt="" />
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
                        {
                            services.slice(0,4).map(service=> 
                                <div className="col">
                                <div className="card h-100 bg-info bg-opacity-10">
                                  <img  src={service.img} className="card-img-top w-50 mx-auto" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title"> {service.name}</h5>
                                    <p className="card-text"> Details:{service.detail}</p>
                                  </div>
                                  <div className="card-footer">
                                    <p>Price: {service.price}</p>
                                  </div>
                                </div>
                              </div>)
                        }

                    </div>
            </Container>
        </div>
    );
};

export default Home;