import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import Checkout from '../pages/Checkout';
import History from '../pages/History';
import Login from "../pages/Login"
import Member from "../pages/Member"
import Register from "../pages/Register"
import UserDetail from "../pages/UserDetail"
import { useState } from 'react';


const Routers = () => {
    const [orders, addOrder] = useState([]);
    const onAddNewOrder = (newOrder) => {
        addOrder((prevOrder)=>{
            return [newOrder,...prevOrder]
        })
    }
    return <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/tamsang-crud' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/checkout' element={<Checkout onAddOrder={onAddNewOrder}/>}/>
        <Route path='/purchase-history' element={<History items={orders}/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/member' element={<Member />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/userdetail' element={<UserDetail />}/>

    </Routes>
}

export default Routers;
