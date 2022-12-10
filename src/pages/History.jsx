import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Order from '../store/Order';

const History = (props) => {
    const {items} = props;
    // const cartItems = useSelector((state)=> state.cart.cartItems);
    return (
        <div>
            {items.map((element)=>{
              return <Order {...element}/>
          })}
        </div>
    );
};

export default History;