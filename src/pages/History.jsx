import React from 'react';
import { Container } from 'reactstrap';
import Order from '../store/Order';
import '../styles/history.css';

const History = (props) => {
    const { items } = props;
    return (
        <div className="historyframe">
            {items.length === 0 ? (
                <div className="no_purchase">
                    <h5 >No purchase history</h5>
                </div>
            ) : (
                <Container>
                    <table className="historytable">
                        <tr className="headrow">
                            <th>Title</th>
                            <th>Address</th>
                            <th>Order list</th>
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