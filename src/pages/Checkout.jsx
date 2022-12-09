import React from 'react';
import { useState } from 'react';
import '../styles/checkout.css';
import ReactDOM from 'react-dom/client';

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

    return (
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
                    />
                </div>
                <div class="submitframe">
                    <input class="submitbutton" type="submit" />
                </div>
            </form>
        </div>
    )
};

export default Checkout;