import React, { useState } from "react";
import Call from "../components/Call";
import Loader from "../components/Loader";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Showcase.css"

function Showcase(props) {
  const [collapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const show = {
    display: "block",
    opacity: "1"
  };
  const main = {
      opacity: "0",
      display: "none"
  
  };
  function loaded() {
    
    setTimeout(() => {      
      setLoading(true)
    }, 2000);
  }
 loaded();

  const images = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
  ].map((image, index) => {
      return <img key={index} className="showcaseImgs" src={require(`../minifiedglossPics/${image}.jpg`)}/>
  })

  return (
    <div>
      {loading ? true : <Loader/>}
      <div style={ loading ? show : main}>
      <div className="showcaseImg">
        <Navbar>
          <NavbarBrand onClick={toggleNavbar} className="mr-auto whiteTxt">
            GlossBoyz
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-caret-down-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2 carToggle" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="whiteTxt" href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="whiteTxt" href="/appointment">
                  Set An Appointment
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="col">
            {images}
        </div>
        <Call />
      </div>
      </div>
    </div>
  );
}

export default Showcase;
