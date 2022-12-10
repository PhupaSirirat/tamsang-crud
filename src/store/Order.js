import '../styles/history.css';
import { useSelector, useDispatch } from "react-redux";
const Order = (props) => {
    const {name, address, postalcode, phonenumber, email} = props;
    console.log(name, address, postalcode, phonenumber);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const date = new Date();
    const showTime = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate() 
    + " " + date.getHours() 
        + ":" + date.getMinutes() 
        + ":" + date.getSeconds();
    return (
        <tr class="datarow">
            <td>{name}</td>
            <td>{address}</td>
            <td>{postalcode}</td>
            <td>{phonenumber}</td>
            <td>{email}</td>
            <td>{totalAmount+30}฿</td>
            <td>{showTime}</td>
            <td>pending</td>
        </tr>
    )
}

export default Order;

