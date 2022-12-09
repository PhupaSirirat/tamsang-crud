import React from 'react';
import "../../styles/newproduct-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

import image from "../../assets/images/product_01.jpg";

const NewProductCard = (props) => {
    const { id, title, image, price } = props.item;
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                image,
                price,
            })
        );
    };

    return (
        <div className="card">
            <img src={image} alt="product-img" className="product-img" />
            <div>
                <h5 className="title">{title}</h5>
                <div className="d-flex justify-content-between">
                    <span className="product_price">${price}</span>
                    <button className="newbtn" onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );

};

export default NewProductCard;