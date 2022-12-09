import React, { useEffect } from 'react';

import { useState } from 'react'
import axios from "axios"

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DateRangeSharp } from '@mui/icons-material';



export default function Member() {

    const API_URL = "http://localhost:3333/member"

    const [dataes, setData] = useState([])

    useEffect(() => {
        axios.get(API_URL).then(res => {
            setData(res.data)
        })
    }, [])


    // return (
    //     <div>{dataes.map(val => (<p>{val.fname}</p>))}</div>

    // );

    {dataes.map((val,key) => {
        return (
            <div>
                <div>
                    <p>First Name : {val.fname}</p>
                    <p>Last Name : {val.lname}</p>
                </div>
            </div>
        )
    })}




}