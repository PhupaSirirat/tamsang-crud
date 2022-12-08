import React from 'react';
import "../../styles/newproduct-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

import image from "../../assets/images/product_01.jpg";

const NewProductCard = () => {
    // const { id, title, image, price } = props.item;
    // const dispatch = useDispatch();

    return (
        <div className="card">
            <img src={image} alt="product-img" className="product-img" />
            <div>
                <h5 className="title">น้ำส้มเปรี้ยว</h5>
                <div className="d-flex justify-content-between">
                    <span className="product_price">$60</span>
                    <button className="newbtn">Add to cart</button>
                </div>
            </div>
        </div>
    );

};

export default NewProductCard;