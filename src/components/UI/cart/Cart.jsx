import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from 'react-router-dom';
import CartItem from "./CartItem";
import "../../../styles/shopping-cart.css";
import { useDispatch } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";

const Carts = () => {
    const dispatch = useDispatch();
    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
      };
    return <div className="cart__container">
        <ListGroup className="cart">
            <div className="cart__close">
                <span onClick={toggleCart}>
                    <i className="ri-close-fill"></i>
                </span>
            </div>

            <div className="cart__item-list">
                <CartItem/>
                <CartItem/>
            </div>

            <div className="cart__bottom d-flex align-items-center justify-content-between">
                <h6>Subtotal : <span>$123</span></h6>
                <button><Link to="/Checkout">Checkout</Link></button>
            </div>

        </ListGroup>
    </div>
};

export default Carts;