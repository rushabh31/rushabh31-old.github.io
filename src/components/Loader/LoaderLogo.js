import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
    
      //<img src={require("../../assests/images/splash_logo_2.gif")} width = "500px"></img>
      
      <video id = "video-splash" autoPlay loop muted>
            <source src={require("../../assests/images/splash_screen.mp4")} type='video/mp4' />
      </video>
      
    );
  }
}

export default LogoLoader;
