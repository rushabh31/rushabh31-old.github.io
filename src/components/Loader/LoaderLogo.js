import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
    
      <img src={require("../../assests/images/splash_logo.gif")} width = "500px"></img>
      

      
    );
  }
}

export default LogoLoader;
