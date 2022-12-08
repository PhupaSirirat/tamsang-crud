import React from "react";
import { ListGroupItem } from "reactstrap";
import productImg from "../../../assets/images/product_01.jpg";

import "../../../styles/cart-item.css";

const CartItem = () => {
    return <ListGroupItem className="border-0 cart__item">
        <div className="cart__item-info d-flex gap-2">
            <img src={productImg} alt="Product-img"/>

            <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
                <div>
                    <h6 className="cart__product-title">ข้าวผัดต้มยำ</h6>
                    <p className="cart__product-price d-flex align-items-center gap-5">2x 
                        <span>$50.00</span>
                    </p>
                    <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
                        <span className="increase__btn">
                            <i className="ri-add-line"></i>
                        </span>
                        <span className="quantity">2</span>
                        <span className="decrease-btn">
                            <i className="ri-subtract-line"></i>
                        </span>
                    </div>
                </div>
                <span className="delete__btn">
                    <i className="ri-delete-bin-5-line"></i>
                </span>
            </div>
        </div>
    </ListGroupItem>
};

export default CartItem;