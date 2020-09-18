import React from "react";
import "../App.css";
import logo from "../assets/logo/logo.png";
import screen1 from "../assets/Screenshot/screen1.png";
import screen2 from "../assets/Screenshot/screen2.png";
import screen3 from "../assets/Screenshot/screen3.png";
import screen4 from "../assets/Screenshot/screen4.png";
import screen5 from "../assets/Screenshot/screen5.png";
import screen6 from "../assets/Screenshot/screen6.png";
import app from "../assets/app-store.svg";
import play from "../assets/google-play.png";
import "./CSS/register.css";

function Home({ history }) {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo"></img>

      <div className="Screenshots">
        <img src={screen1} alt="Screenshot"></img>
        <img src={screen2} alt="Screenshot"></img>
        <img src={screen3} alt="Screenshot"></img>
        <img src={screen4} alt="Screenshot"></img>
        <img src={screen5} alt="Screenshot"></img>
        <img src={screen6} alt="Screenshot"></img>
      </div>
      <div className="Badge">
        <button
          className="button"
          onClick={() => {
            history.push("/Register");
          }}
        >
          Register
        </button>
      </div>
      <div className="Badge">
        <img src={app} alt="Apple/IOS"></img>
        <img src={play} alt="google/ANDROID"></img>
      </div>
    </div>
  );
}

export default Home;
