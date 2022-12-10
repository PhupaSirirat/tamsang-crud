import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/cart-sidebar-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const CartItem = ({item}) => {

    const {id, title, price, image, quantity, totalPrice} = item;
    const dispatch = useDispatch();
    const increamentItem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image,
        }))
    }
    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id));
    }
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    }


    return <ListGroupItem className="border-0 cart__item">
        <div className="cart__item-info d-flex gap-2">
            <img src={image} alt="Product-img"/>

            <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
                <div>
                    <h6 className="cart__product-title">{title}</h6>
                    <p className="cart__product-price d-flex align-items-center gap-5">
                        {quantity}x <span>{totalPrice}฿</span>
                    </p>
                    <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
                        <span className="increase__btn" onClick={increamentItem}>
                            <i className="ri-add-line"></i>
                        </span>
                        <span className="quantity">{quantity}</span>
                        <span className="decrease__btn" onClick={decreaseItem}>
                            <i className="ri-subtract-line"></i>
                        </span>
                    </div>
                </div>
                <span className="delete__btn" onClick={deleteItem}>
                    <i className="ri-delete-bin-5-line"></i>
                </span>
            </div>
        </div>
    </ListGroupItem>
};

export default CartItem;