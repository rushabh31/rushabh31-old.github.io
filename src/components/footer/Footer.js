import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */
import Particles from 'react-particles-js';


export default function Footer() {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text">Developed by Rushabh Patel</p>
      </Fade>
      <Particles
            params={{
              particles: {
                opacity: {
                  value:0.05
                },
                size: {
                  value: 5
                },
                color: {
                  value: "#167cd8"
                },
                lineLinked: {
                  color:'#167cd8',
                  opacity:0.05,
                  distance: 250

                },
                anim:{
                  sync:true
                },
                number: {
                  value: 150
                }
              },
              interactivity: {
              events: {
                  onhover: {
                      enable: true,
                      mode: "repulse"
                  }
              }
            }
            }}
      id="mainParticles"
      />

    </div>
  );
}
