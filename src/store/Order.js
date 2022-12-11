import '../styles/history.css';
const Order = (props) => {
    const {name, address, postalcode, phonenumber, email, titles, totalAmount, showTime} = props;
    // console.log(name, address, postalcode, phonenumber);
    return (
        <tr className="datarow">
            <td className="order_title">
                <div>{name}</div> 
                <div>{phonenumber}</div> 
                <div>{email}</div></td>
            <td>{address} {postalcode}</td>
            <td className="order_title">{titles.map((title) => <div>{title}</div>)}</td>
            <td>{totalAmount+30}฿</td>
            <td>{showTime}</td>
            <td>Pending</td>
        </tr>
    )
}

export default Order;

