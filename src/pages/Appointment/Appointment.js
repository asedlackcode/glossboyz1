import React, { useState } from "react";
import Loader from "../../components/Loader";
import Call from "../../components/Call";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Appointment.css";
import SmallCard from "../../components/SmallCard";
import Home from "../Home/Home";
import Showcase from "../Showcase";
import MediumCard from "../../components/MediumCard";
import LargeCard from "../../components/LargeCard";

function Appointment(props) {
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
                <NavLink className="whiteTxt" href="/showcase">
                  View Collection
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="row">
          <div className="col animate__animated animate__fadeInLeft animate__delay-1s">
             <SmallCard />
          </div>
          <div className="col animate__animated animate__fadeInDown animate__delay-1s">
            <MediumCard/>
          </div>
          <div className="col animate__animated animate__fadeInRight animate__delay-1s">
            <LargeCard/>
          </div>
        </div>
        </div>
        <Call/>
        </div>
        </div>
        
        
    );
}

export default Appointment;