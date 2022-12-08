import React from "react";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import Routes from "../../routes/Routers";
import Cart from "../UI/cart/Cart";
import { useSelector } from "react-redux";

const Layout = () => {
    const showCart = useSelector(state => state.cartUi.cartIsVisible)
    return (
        <div>
            <Header/>

            {showCart && <Cart/>}

            <div>
                <Routes/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;