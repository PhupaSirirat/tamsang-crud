import '../styles/history.css';
const Order = (props) => {
    const {name, address, postalcode, phonenumber, email, totalAmount, showTime} = props;
    console.log(name, address, postalcode, phonenumber);
    return (
        <tr className="datarow">
            <td className="order_title">
                <span>{name}</span> 
                <span>{phonenumber}</span> 
                <span>{email}</span></td>
            <td>{address} {postalcode}</td>
            <td>{totalAmount+30}฿</td>
            <td>{showTime}</td>
            <td>Pending</td>
        </tr>
    )
}

export default Order;

