import React from 'react';

// // import CommonSection from '../components/UI/'
// import Helmet from '../components/Helmet/helmet';
// // import cart-css
// import { useSelector, useDispatch } from 'react-redux';
// import { Container, Row, Col } from 'reactstrap';
// import { cartActions } from "../store/shopping-cart/cartSlice";
// import { Link } from 'react-router-dom';

const Cart = () => {
    // const cartItems = useSelector((state => state.cart.cartItems));
    // const totalAmount = useSelector((state => state.totalAmount));
    return (
        <div>
            Cart Page
        </div>
    );
};

// const Tr = (props) => {
//     const { id, image, title, price, quantity } = props.item;
//     const dispatch = useDispatch();
//     const deleteItem = () => {
//         dispatch(cartActions.deleteItem(id));
//     };

//     return (
//         <tr>
//             <td className="text-center cart__imd-box">
//                 <img src={image} alt="" />
//             </td>
//             <td className="text-center">{title}</td>
//             <td className="text-center">${price}</td>
//             <td className="text-center">{quantity}</td>
//             <td className="text-center cart__item-del">
//                 <i className="ri-delete-bin-line" onClick={deleteItem}></i>
//             </td>
//         </tr>
//     );
// };

export default Cart;