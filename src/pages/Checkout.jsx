import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import '../styles/checkout.css';
import { cartActions } from '../store/shopping-cart/cartSlice';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
    const [inputs, setInputs] = useState({});
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();
    const resetCart = () => {
        dispatch(cartActions.resetItem());
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        // Get Date & push in [inputs]

        const date = new Date();
        const showTime = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate() 
        + " " + date.getHours() 
        + ":" + date.getMinutes() 
        + ":" + date.getSeconds();

        // Get All Product Title in cartItems
        const all_cartTitle = [];
        cartItems.map((item) => all_cartTitle.push(item.title));

        inputs.titles = all_cartTitle;
        inputs.totalAmount = totalAmount;
        inputs.showTime = showTime;

        // For Backend

        const jsonData = {
            name : inputs.name,
            email : inputs.email,
            phonenum : inputs.phonenumber,
            orderTime : inputs.showTime,
            total : inputs.totalAmount,
            item : all_cartTitle
        }


        fetch('http://localhost:3333/history', {
        method: 'POST',
        crossDomail : true,
        headers: {
          'Content-Type': 'application/json',
          Accept : "application/json",
          "Access-Control-Allow-Origin" : "*",
        },
        body: JSON.stringify(jsonData),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.status === "ok"){
              console.log("Add success")
          } else {
              console.log("Add failed")
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        // End Backend

        event.preventDefault();
        if (cartItems.length === 0) {
            alert('No food to purchase')
        }
        else {
            alert('Purchase sent successfully');
            props.onAddOrder(inputs);
            resetCart();
            // window.location.pathname = '/purchase-history';
        }
    }


    return (
        <div className="all">
            <div className="allform">
                <div className="subtitle">
                    <label className="title">ที่อยู่จัดส่ง</label>
                </div>
                <form>
                    <div className="singleform">
                        <input
                            className="insideform"
                            type="text"
                            placeholder='ชื่อ นามสกุล'
                            name="name"
                            // value={inputs.name || ""}
                            value={inputs.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="singleform">
                        <input
                            className="insideform"
                            type="text"
                            placeholder='ที่อยู่'
                            name="address"
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
                            // value={inputs.phonenumber || ""}
                            value={inputs.phonenumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="singleform">
                        <input
                            className="insideform"
                            type="text"
                            placeholder='อีเมล์'
                            name="email"
                            // value={inputs.email || ""}
                            value={inputs.email || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="submitframe">
                        {/* <input className="submitbutton" type="submit"/> */}
                        <button className="submitbutton" type="submit" onClick={handleSubmit}>
                            <Link to='/purchase-history' >Submit</Link>
                        </button>
                    </div>
                </form>
            </div>
            <div className="checkoutbill">
                <h6>ราคารวม : <span className="billline">{totalAmount}฿</span></h6>
                <h6>ค่าส่ง : <span className="billline">30฿</span></h6>
                <hr className="line"></hr>
                <h5 className="totalbill">ทั้งหมด : <span className="billline">{totalAmount + 30}฿</span></h5>
            </div>
        </div>
    )
};

export default Checkout;