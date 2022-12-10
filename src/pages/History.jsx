import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Order from '../store/Order';
import '../styles/history.css';

const History = (props) => {
    const { items } = props;
    // const cartItems = useSelector((state)=> state.cart.cartItems);
    return (
        <div class="historyframe">
            {items.length === 0 ? (
                <div className="no_purchase">
                    <h5 >No purchase history</h5>
                </div>
            ) : (
                <Container>
                    <table class="historytable">
                        <tr class="headrow">
                            <th>Name</th>
                            <th>Address</th>
                            <th>Postal Code</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                                    {items.map((element) => {
                                        return <Order {...element} />
                                    })}
                    </table>
                </Container>
            )}
        </div>
    );
};

export default History;