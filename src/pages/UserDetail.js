// import { extendSxProp } from "@mui/system";
import React, { Component } from "react"
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import { withCookies } from 'react-cookie';
import '../styles/userdetail.css';

export default class UserDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: "",
        }
    }

    componentDidMount() {

        fetch('http://localhost:3333/userdata', {
            method: 'POST',
            crossDomail: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data, "userdata");
                this.setState({ userData: data.data })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    logout() {
        localStorage.removeItem('token')
    }

    render() {
        return (
            <div className="user-detail">
                <div><h1>User : {this.state.userData.fname} {this.state.userData.lname}</h1></div>
                <div><h1>Email : {this.state.userData.email}</h1></div>
            <Link href="/login" className="btn">
                <Button
                    className="btn btn-primary"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={this.logout}
                    sx={{ mt: 3, mb: 2 }
                    }
                >
                    Log out
                </Button>
            </Link>
            
            </div>
                

        );
    }
}