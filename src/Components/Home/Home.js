import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useServices from '../../Custom-Hook/useServices';

const Home = () => {
    const [services, setServices] = useServices([]);
    return (
        <div>
            <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            services.slice(0,4).map(service=> 
                                <div className="col">
                                <div className="card h-100">
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