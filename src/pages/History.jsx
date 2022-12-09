import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const History = () => {
    const cartItems = useSelector((state)=> state.cart.cartItems);

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        {cartItems.length === 0 ? (
                            <h5>No food to purchase</h5>
                        ) : (
                            <h5>There is an order</h5>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default History;