import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <section id="feature1">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-6">
        </div>
      </div>
    </div>
    </section>

      <div className="greet-main" id="greeting">

        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>

              <h2> {greeting.title} </h2>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />


              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>

          </div>
          <div className="greeting-image-div">
            <img
              alt="Rushabh sitting on table"
              src={require("../../assests/images/statistics-chart.svg")}
            ></img>
          </div>

        </div>
      </div>
    </Fade>

  );
}
