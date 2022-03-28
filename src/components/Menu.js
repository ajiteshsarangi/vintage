import React from "react";
import food from "../burger.png";
function Menu() {
  return (
    <div id="menu">
      <h3 className="welcome-h3" style={{ textAlign: "center", marginTop: "60px" }}>
        Discover
      </h3>
      <div className="welcome-heading" style={{ textAlign: "center", margin: "30px 0 60px 0" }}>
        Our Wildest Range of Food
      </div>
      <section className="probootstrap-section probootstrap-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="menus">
                <li className="flex my-5">
                  <figure>
                    <img src={food} className="image" />
                  </figure>
                  <div className=" flex2">
                    <div>
                      <h3 className="menu-heading">Fried Potatoes with Garlic</h3>
                      <p className="submenu-heading">Crab / Potatoes / Rice</p>
                    </div>
                    <span className="price">$22.99</span>
                  </div>
                </li>
                <li className="flex my-5">
                  <figure>
                    <img src={food} className="image" />
                  </figure>
                  <div className=" flex2">
                    <div>
                      <h3 className="menu-heading">Fried Potatoes with Garlic</h3>
                      <p className="submenu-heading">Crab / Potatoes / Rice</p>
                    </div>
                    <span className="price">$22.99</span>
                  </div>
                </li>
                <li className="flex my-5">
                  <figure>
                    <img src={food} className="image" />
                  </figure>
                  <div className=" flex2">
                    <div>
                      <h3 className="menu-heading">Fried Potatoes with Garlic</h3>
                      <p className="submenu-heading">Crab / Potatoes / Rice</p>
                    </div>
                    <span className="price">$22.99</span>
                  </div>
                </li>
                <li className="flex my-5">
                  <figure>
                    <img src={food} className="image" />
                  </figure>
                  <div className=" flex2">
                    <div>
                      <h3 className="menu-heading">Fried Potatoes with Garlic</h3>
                      <p className="submenu-heading">Crab / Potatoes / Rice</p>
                    </div>
                    <span className="price">$22.99</span>
                  </div>
                </li>
                <li className="flex my-5">
                  <figure>
                    <img src={food} className="image" />
                  </figure>
                  <div className=" flex2">
                    <div>
                      <h3 className="menu-heading">Fried Potatoes with Garlic</h3>
                      <p className="submenu-heading">Crab / Potatoes / Rice</p>
                    </div>
                    <span className="price">$22.99</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="menus">
                <li className="flex my-5">
                  <figure>
                    <img src={food} className="image" />
                  </figure>
                  <div className=" flex2">
                    <div>
                      <h3 className="menu-heading">Fried Potatoes with Garlic</h3>
                      <p className="submenu-heading">Crab / Potatoes / Rice</p>
                    </div>
                    <span className="price">$22.99</span>
                  </div>
                </li>
                <li className="flex my-5">
                  <figure>
                    <img src={food} className="image" />
                  </figure>
                  <div className=" flex2">
                    <div>
                      <h3 className="menu-heading">Fried Potatoes with Garlic</h3>
                      <p className="submenu-heading">Crab / Potatoes / Rice</p>
                    </div>
                    <span className="price">$22.99</span>
                  </div>
                </li>
                <li className="flex  my-5">
                  <figure>
                    <img src={food} className="image" />
                  </figure>
                  <div className=" flex2">
                    <div>
                      <h3 className="menu-heading">Fried Potatoes with Garlic</h3>
                      <p className="submenu-heading">Crab / Potatoes / Rice</p>
                    </div>
                    <span className="price">$22.99</span>
                  </div>
                </li>
                <li className="flex my-5">
                  <figure>
                    <img src={food} className="image" />
                  </figure>
                  <div className=" flex2">
                    <div>
                      <h3 className="menu-heading">Fried Potatoes with Garlic</h3>
                      <p className="submenu-heading">Crab / Potatoes / Rice</p>
                    </div>
                    <span className="price">$22.99</span>
                  </div>
                </li>
                <li className="flex my-5">
                  <figure>
                    <img src={food} className="image" />
                  </figure>
                  <div className=" flex2">
                    <div>
                      <h3 className="menu-heading">Fried Potatoes with Garlic</h3>
                      <p className="submenu-heading">Crab / Potatoes / Rice</p>
                    </div>
                    <span className="price">$22.99</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
