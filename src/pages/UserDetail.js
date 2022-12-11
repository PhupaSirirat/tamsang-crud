import { extendSxProp } from "@mui/system";
import React, { Component } from "react"
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { withCookies } from 'react-cookie';


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

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>

                Name<h1>{this.state.userData.fname}</h1>
                Email<h1>{this.state.userData.email}</h1>

            <Link href="/login">
                <Button
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