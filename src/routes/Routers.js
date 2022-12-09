import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import Checkout from '../pages/Checkout';
import History from '../pages/History';
import Album from "../pages/Album"
import Login from "../pages/Login"
import Member from "../pages/Member"
import Register from "../pages/Register"

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/purchase-history' element={<History />}/>
        <Route path='/album' element={<Album />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/member' element={<Member />}/>
        <Route path='/register' element={<Register />}/>



    </Routes>
}

export default Routers;
