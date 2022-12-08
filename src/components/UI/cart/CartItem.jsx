import React from "react";
import { ListGroupItem } from "reactstrap";
import productImg from "../../../assets/images/product_01.jpg";

const CartItem = () => {
    return <ListGroupItem>
        <div className="cart__item-info">
            <img src={productImg} alt="Product-img>
        </div>
    </ListGroupItem>
};

export default CartItem;