import React, { useState } from "react";
import { TextField, Button, Divider } from "@material-ui/core";
import "./CSS/register.css";
import logo from "../assets/logo/logo.png";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";

import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2c1951",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
export default function Forgot({history}) {
    const [password,setPassword] = useState();
    const query = useQuery()
    const handleSubmit = async() => {
        await axios.post("https://sql-test-api.herokuapp.com/forgot", 
        {
            email: query.get("email"),
            password: password,
        },{
            headers: {
                'Authorization': `BEARER ${query.get("id")}`
            }
        }).then((response)=>{
            history.push("/");
        }).catch((err) => {console.log(err)})
    }
    return(
    <div className="fullBody">
        <div className="container">
          <img src={logo} alt="Logo" className="logo"></img>
          <form className="formContainer">
            <label className="label">Reset Password</label>
            <Divider light={false} variant="fullWidth" />
            <div className="oneLine">
            <TextField
              id="newpass"
              label="New Password"
              variant="outlined"
              required
              className="field"
              margin="normal"
              type="password"
              fullWidth
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            </div>

            <ThemeProvider theme={theme}>
            <div className="buttonContainer">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                margin="normal"
                fullWidth
              >
                Reset Password
              </Button>
            </div>
          </ThemeProvider>
          </form>
        </div>
    </div>
                
    )
}