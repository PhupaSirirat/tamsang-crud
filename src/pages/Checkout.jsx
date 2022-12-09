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
        <div class="all">
            <div class="allform">
                <div class="subtitle">
                    <label>ที่อยู่จัดส่ง</label>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="singleform">
                        <input
                            class="insideform"
                            type="text"
                            placeholder='ชื่อ'
                            name="firstname"
                            value={inputs.firstname || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="singleform">
                        <input
                            class="insideform"
                            type="text"
                            placeholder='นามสกุล'
                            name="lastname"
                            value={inputs.lastname || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="singleform">
                        <input
                            class="insideform"
                            type="text"
                            placeholder='จังหวัด'
                            name="province"
                            value={inputs.province || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="singleform">
                        <input
                            class="insideform"
                            type="text"
                            placeholder='เขต/อำเภอ'
                            name="district"
                            value={inputs.district || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="singleform">
                        <input
                            class="insideform"
                            type="text"
                            placeholder='แขวง/ตำบล'
                            name="subdistrict"
                            value={inputs.subdistrict || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="singleform">
                        <input
                            class="insideform"
                            type="text"
                            placeholder='เลขที่อยู่'
                            name="address"
                            value={inputs.address || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="singleform">
                        <input
                            class="insideform"
                            type="number"
                            placeholder='รหัสไปรษนีย์'
                            name="postalcode"
                            value={inputs.postalcode || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="singleform">
                        <input
                            class="insideform"
                            type="number"
                            placeholder='หมายเลขโทรศัพท์'
                            name="phonenumber"
                            value={inputs.phonenumber || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="singleform">
                        <input
                            class="insideform"
                            type="text"
                            placeholder='อีเมล์'
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="submitframe">
                        <input class="submitbutton" type="submit" />
                    </div>
                </form>
            </div>
            <div class="checkoutbill">
                <h6>ราคารวม : <span class="billline">${totalAmount}</span></h6>
                <h6>ค่าส่ง : <span class="billline">$30</span></h6>
                <hr class="line"></hr>
                <h5 class="totalbill">ทั้งหมด : <span class="billline">${totalAmount + 30}</span></h5>
            </div>
        </div>
    )
};

export default Checkout;