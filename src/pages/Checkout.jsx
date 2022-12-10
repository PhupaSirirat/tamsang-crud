import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import '../styles/checkout.css';

const Checkout = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <div className="all">
            <div className="allform">
                <div className="subtitle">
                    <label className="title">ที่อยู่จัดส่ง</label>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="singleform">
                        <input
                            className="insideform"
                            type="text"
                            placeholder='ชื่อ นามสกุล'
                            name="firstname"
                            value={inputs.firstname || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="singleform">
                        <input
                            className="insideform"
                            type="text"
                            placeholder='ที่อยู่'
                            name="province"
                            value={inputs.address || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="singleform">
                        <input
                            className="insideform"
                            type="number"
                            placeholder='รหัสไปรษนีย์'
                            name="postalcode"
                            value={inputs.postalcode || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="singleform">
                        <input
                            className="insideform"
                            type="number"
                            placeholder='หมายเลขโทรศัพท์'
                            name="phonenumber"
                            value={inputs.phonenumber || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="singleform">
                        <input
                            className="insideform"
                            type="email"
                            placeholder='อีเมล์'
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="submitframe">
                        <input className="submitbutton" type="submit" />
                    </div>
                </form>
            </div>
            <div className="checkoutbill">
                <h6>ราคารวม : <span className="billline">${totalAmount}</span></h6>
                <h6>ค่าส่ง : <span className="billline">$30</span></h6>
                <hr className="line"></hr>
                <h5 className="totalbill">ทั้งหมด : <span className="billline">${totalAmount + 30}</span></h5>
            </div>
        </div>
    )
};

export default Checkout;