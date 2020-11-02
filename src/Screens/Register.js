import React, { useState } from "react";
import { TextField, Button, Divider } from "@material-ui/core";
import "./CSS/register.css";
import logo from "../assets/logo/logo.png";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";

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

export default function Register({ history }) {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [billing, setBilling] = useState({
    line1: "",
    line2: "",
    post: "",
    city: "",
  });
  const [text, setText] = useState("");
  const handleSubmit = async () => {
    setText("Loading...");
    await axios
      .post(
        "http://sql-test-api.herokuapp.com/register",
        {
          firstName: details.fname,
          lastName: details.lname,
          email: details.email,
          password: details.password,
        }
      )
      .then(async (response) => {
        console.log(response);
        await axios
          .post(
            "http://sql-test-api.herokuapp.com/addBilling",
            {
              address: {
                city: billing.city,
                country: "GB",
                line1: billing.line1,
                line2: billing.line2,
                postal_code: billing.post,
              },
              customerID: response.data,
            }
          )
          .then(async (billResponse) => {
            history.push({
              pathname: "/payment",
              state: { customerID: response.data },
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="fullBody">
      <div className="container">
        <img src={logo} alt="Logo" className="logo"></img>
        <form className="formContainer">
          <label className="label">Login Details</label>
          <Divider light={false} variant="fullWidth" />
          <div className="oneLine">
            <TextField
              id="first"
              label="First Name"
              variant="outlined"
              required
              className="field"
              margin="normal"
              fullWidth
              onChange={(e) => {
                setDetails({
                  fname: e.target.value,
                  lname: details.lname,
                  email: details.email,
                  password: details.password,
                });
              }}
            />
            <div className="spacing"></div>
            <TextField
              id="last"
              label="Last Name"
              variant="outlined"
              required
              margin="normal"
              fullWidth
              onChange={(e) => {
                setDetails({
                  fname: details.fname,
                  lname: e.target.value,
                  email: details.email,
                  password: details.password,
                });
              }}
            />
          </div>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            required
            margin="normal"
            onChange={(e) => {
              setDetails({
                fname: details.fname,
                lname: details.lname,
                email: e.target.value,
                password: details.password,
              });
            }}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            required
            margin="normal"
            type="password"
            onChange={(e) => {
              setDetails({
                fname: details.fname,
                lname: details.lname,
                email: details.email,
                password: e.target.value,
              });
            }}
          />
        </form>

        <form className="formContainer">
          <label className="label">Billing Details</label>
          <Divider light={false} variant="fullWidth" />
          <TextField
            id="address1"
            label="Address line 1"
            variant="outlined"
            required
            className="field"
            margin="normal"
            fullWidth
            onChange={(e) => {
              setBilling({
                line1: e.target.value,
                line2: billing.line2,
                post: billing.post,
                city: billing.city,
              });
            }}
          />
          <TextField
            id="address2"
            label="Address line 2"
            variant="outlined"
            className="field"
            margin="normal"
            fullWidth
            onChange={(e) => {
              setBilling({
                line1: billing.line1,
                line2: e.target.value,
                post: billing.post,
                city: billing.city,
              });
            }}
          />
          <TextField
            id="postcode"
            label="Post Code"
            variant="outlined"
            className="field"
            margin="normal"
            required
            fullWidth
            onChange={(e) => {
              setBilling({
                line1: billing.line1,
                line2: billing.line2,
                post: e.target.value,
                city: billing.city,
              });
            }}
          />
          <TextField
            id="city"
            label="City"
            variant="outlined"
            className="field"
            margin="normal"
            required
            fullWidth
            onChange={(e) => {
              setBilling({
                line1: billing.line1,
                line2: billing.line2,
                post: billing.post,
                city: e.target.value,
              });
            }}
          />

          <ThemeProvider theme={theme}>
            <div className="buttonContainer">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                margin="normal"
                fullWidth
              >
                Register
              </Button>
            </div>
          </ThemeProvider>
          {text}
        </form>
      </div>
    </div>
  );
}
