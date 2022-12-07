import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

import logo from '../../assets/images/logo.jpg';
import '../../styles/footer.css';
const Footer = () => {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='3' md='4' sm='6'>
                    <div className="footer__logo text-start">
                        <img src={logo} alt="logo"></img>
                        <h5>TamSang CRUD</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            necessitatibus voluptatibus.</p>
                    </div>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <h5 className='footer__title'>Open Time</h5>
                    <ListGroup className='opt__list'>
                        <ListGroupItem className="opt__item border-0 ps-0">
                            <span>Monday - Friday</span>
                            <p>10:00am - 5:00pm</p>
                        </ListGroupItem>
                    </ListGroup>

                    <ListGroup>
                        <ListGroupItem className="opt__item border-0 ps-0">
                            <span>Saturday - Sunday</span>
                            <p>Off day</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <h5 className='footer__title'>Contact</h5>
                    <p>หนุ่มหาดใหญ่ Computer Science Chulalongkorn University</p>
                    <ListGroup className='opt__list'>
                        <ListGroupItem className="opt__item border-0 ps-0">
                            <span>Phone: 0123456789</span>
                        </ListGroupItem>
                    </ListGroup>

                    <ListGroup>
                        <ListGroupItem className="opt__item border-0 ps-0">
                            <span>Email: example@example.com</span>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <h5 className='footer__title'>Newsletter</h5>
                    <p>Subscribe our newsletter</p>
                    <div className="newsletter">
                        <input type='email' placeholder='Enter your email'/>
                        <span><i className="ri-mail-send-line"></i></span>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;