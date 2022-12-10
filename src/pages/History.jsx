import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const all_orders = [];

const History = ( props ) => {
    const item = props;
    // const {name, address, postalcode, phonenumber, email} = props;
    const cartItems = useSelector((state)=> state.cart.cartItems);
    all_orders.push(item);

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        {(all_orders.length === 0) ? (
                            <h5>No Order sent</h5>
                        ) : (
                            <div>
                                <p>There is {all_orders.length} order(s) sent</p>
                                {all_orders.join(', ')}
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default History;