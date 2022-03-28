import React from "react";
import chef from "../chef.jpg";
function Welcome() {
  return (
    <div className="hero flex welcome" id="about-us">
      <div className="welcome-img-container">
        <img src={chef} style={{ height: "450px", width: "350px" }} />
      </div>
      <div className="welcome-container flex">
        <h3 className="welcome-h3">Who are we ?</h3>
        <div className="welcome-heading">
          all in good taste <br />
          vintage style.
        </div>
        <p className="welcome-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit eveniet magni
          deserunt natus esse ea quidem blanditiis voluptates tenetur.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Earum fugit eveniet magni deserunt natus esse ea quidem
          blanditiis voluptates tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum fugit eveniet magni deserunt natus esse ea quidem blanditiis voluptates tenetur.
        </p>
        <button className="welcome-btn">Explore Our Story</button>
      </div>
    </div>
  );
}

export default Welcome;
