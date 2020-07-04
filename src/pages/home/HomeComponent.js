import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Particles from 'react-particles-js';
import ReactGA from 'react-ga';
import "./HomeComponent.css";
function initializeReactGA() {
    ReactGA.initialize('UA-159642038-1');
    ReactGA.pageview('/homepage');
}
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Footer />


      </div>

    );
  }
}

export default Home;
