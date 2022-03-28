import React from "react";

function Cards() {
  return (
    <div id="our-services">
      <h3 className="welcome-h3" style={{ textAlign: "center", marginTop: "30px" }}>
        Our Services
      </h3>
      <div className="welcome-heading" style={{ textAlign: "center", margin: "30px 0" }}>
        Why choose us ?
      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <img
            src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services1.svg"
            alt=""
          />
          <h2>Various Menus</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod, ex fugit labore
            accusantium vel?
          </p>
        </div>

        <div className="box box-down cyan">
          <img
            src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services2.svg"
            alt=""
          />
          <h2>Pocket Friendly Delivery</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod, ex fugit labore
            accusantium vel?
          </p>
        </div>
        <div className="box box-down cyan">
          <img
            src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services3.svg"
            alt=""
          />
          <h2>Best Offers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod, ex fugit labore
            accusantium vel?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
