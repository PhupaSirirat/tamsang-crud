import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import '../styles/add-bootstrap.css';
import { cartActions } from '../store/shopping-cart/cartSlice';
import '../styles/Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state)=> state.cart.cartItems);
    const totalAmount = useSelector((state)=> state.cart.totalAmount);

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        {cartItems.length === 0 ? (
                            <h5 className="text-center cart-empty">Your cart is empty</h5>
                        ) : (
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <Tr item={item} key={item.id} />
                                    ))}
                                </tbody>
                            </table>
                        )}

                        <div className='mt-4'>
                            <h6>
                                Subtotal: <span className='cart__subtotal'>{totalAmount}฿</span>
                            </h6>
                            <p>Taxes and shipping will calculate at checkout</p>
                            <div className="cart__page-btn">
                                <button className="addTOCart__btn me-4 continue-shopping-btn">
                                    <Link to='/home'>Continue Shopping</Link>
                                </button>
                                <button className="addTOCart__btn proceed-btn">
                                    <Link to='/checkout'>Proceed to checkout</Link>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const Tr = (props) => {
    const { id, image, title, price, quantity } = props.item;
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
    };

    return (
        <tr>
            <td className="text-center cart__img-box">
                <img src={image} alt="" />
            </td>
            <td className="text-center cart-title">{title}</td>
            <td className="text-center">{price}฿</td>
            <td className="text-center quantity-box">
                <span className="increase__btn" onClick={increamentItem}>
                        <i className="ri-add-line"></i>
                </span>
                {quantity}
                <span className="decrease__btn" onClick={decreaseItem}>
                    <i className="ri-subtract-line"></i>
                </span>
            </td>
            <td className="text-center cart__item-del">
                <i className="ri-delete-bin-line" onClick={deleteItem}></i>
            </td>
        </tr>
    );
};

export default Cart;