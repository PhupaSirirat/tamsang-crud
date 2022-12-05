import React from "react";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import Routes from "../../routes/Routers";

const Layout = () => {
    return (
        <div>
            <Header/>
            <div>
                <Routes/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;