import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Order from '../store/Order';
import '../styles/history.css';

const History = (props) => {
    const {items} = props;
    // const cartItems = useSelector((state)=> state.cart.cartItems);
    return (
        <div>
            {items.length === 0 ? (
                <div className="no_purchase">
                    <h5 >No purchase history</h5>
                </div>
            ) : (
                <Container>
                    <Row>
                        <div className="order_history">
                            {items.map((element)=>{
                                return <Order {...element}/>
                            })}
                        </div>
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default History;