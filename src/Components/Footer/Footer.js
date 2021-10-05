import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-info">
            <div className="contanier">
                <Row>
                <Col className="p-4">
                <h1>Medical <span>Care</span></h1>
                <p>vkfghsdgksgsdlkdkjf</p>
                </Col>
                <Col className="p-3 ">
                    <h1>
                        Follow Us
                    </h1>
                
                <Row md={6}>
                    <Col>Facebook</Col>
                    <Col>Instagram</Col>
                    <Col>Twiter</Col>
                </Row>
                </Col>
                </Row>
                <div >
                <h4 className="text-center pb-4">Copy right 2021</h4>
                </div>

            </div>
            
        </div>
    );
};

export default Footer;