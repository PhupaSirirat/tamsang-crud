const Order = (props) => {
    const {name, address, postalcode, phonenumber, email} = props;
    console.log(name, address, postalcode, phonenumber);
    return (
        <div>
            Name: {name}
            Address: {address}
            Postalcode: {postalcode}
            Phone: {phonenumber}
            Email: {email}
        </div>
    )
}

export default Order;

