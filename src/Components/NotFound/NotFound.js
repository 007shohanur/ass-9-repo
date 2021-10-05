import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../img/Notfound.jpeg'

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <img src={image} alt="" />
                    </Col>
                 </Row>
            </Container>
        </div>
    );
};

export default NotFound;