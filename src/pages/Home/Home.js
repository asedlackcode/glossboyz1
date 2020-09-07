import React, { useState } from "react";
import Call from "../../components/Call";
import AboutModal from "../../components/AboutModal";
import Loader from "../../components/Loader";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Image1 from "../../minifiedglossPics/10.jpg";
import Image2 from "../../minifiedglossPics/7.jpg";
import Image3 from "../../minifiedglossPics/54.jpg";
import Image4 from "../../minifiedglossPics/61.jpg";
import Image5 from "../../minifiedglossPics/62.jpg";
import Image6 from "../../minifiedglossPics/52.jpg";
import GabePic from "../../imgs/gabePic.jpg";
import "./Home.css";
import Icon from "../../imgs/logoBanner1.png";
import BookNow from "../../imgs/bookNow.png";
import SmallLogo from "../../imgs/smallLogo.jpg";
// import Appointment from "../Appointment";
// import Quote from "../Quote";
// import Showcase from "../Showcase";

function Home(props) {
  const [collapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const show = {
    display: "block",
    opacity: "1",
  };
  const main = {
    opacity: "0",
    display: "none",
  };

  function loaded() {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }
  loaded();
  return (
    <div>
      {loading ? true : <Loader />}
      <div style={loading ? show : main}>
        <div className="mainImg2">
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
                  <NavLink className="whiteTxt" href="/appointment">
                    Set An Appointment
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                <NavLink className="whiteTxt" href="/quote">
                  Get A Quote
                </NavLink>
              </NavItem> */}
                <NavItem>
                  <NavLink className="whiteTxt" href="/showcase">
                    View Collection
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Call />
          <div className="mainTitle animate__animated animate__bounceInUp">
            <img className="logoBanner" alt="logo" src={Icon} />
          </div>
        </div>
        <div className="aboutCompany">
          <div className="container">
            <h2 style={{ fontFamily: "'Lobster', cursive" }}>About The Biz</h2>
            <hr />
            <div>
              <img className="Image1" src={Image1} alt="small logo" />
            </div>
            <p className="mainTxt1">
              Here at GlossBoyz Detailing our goal is to ensure that your
              vehicle receives the upmost care when it comes to detailing it. We
              treat each vehicle as if it were our own by setting high standards
              for the finished results.
            </p>
            <p className="mainTxt1">
              We use premium car wash soaps, combined with deionized water to
              safely wash your vehicle without the nasty and annoying water
              spots. Following each wash, the vehicle is dried with high quality
              microfiber towels to prevent any scratching from occurring. Once
              dry, the wheels are properly dressed with a water-based tire shine
              so there is no nasty buildup of the dressing wash. Each interior
              detail begins with a thorough vacuum of the entire vehicle, while
              using a soft boars hairbrush to brush out any loose dirt particles
              in hard to reach areas such as the air vents, the control buttons
              on the doors, and inside cupholders and door compartments. Using a
              premium microfiber towel and an interior cleaner we wipe down all
              interior surfaces, and use a brush + cleaner combo to scrub away
              any grease or dirt build up on arm rests, in cupholders and other
              places such as the steering wheel and shift knob/lever. Finally,
              to complete the detail we use an ammonia free glass cleaner to get
              that streak free finish that we all love!
            </p>
            <img className="Image6" src={Image6} alt="" />
            <p className="mainTxt1">
              Our work is not complete until you are completely satisfied with
              the finished results. There is no better feeling for us than
              turning in a fully detailed vehicle and seeing you happy and
              smiling. Head over and check out our collection to view some our
              work, and do not forget to hit the “Book now” button to schedule
              an appointment with us! We hope to see you and your vehicle soon!
            </p>
          </div>
        </div>
        <div className="mainImg1">
          <div
            className="quoteBackground"
            style={{ margin: "auto", width: "24%" }}
          >
            <a href="/appointment">
              <img className="quoteIcon" alt="quotePic" src={BookNow} />
            </a>
          </div>
        </div>
        <div className="aboutCompany">
          <div className="container">
            <img className="Image2" src={Image2} alt="small logo" />
            <h2 style={{ fontFamily: "'Lobster', cursive" }}>
              Exterior Services
            </h2>
            <strong>Wash</strong>
            <p className="mainTxt">
              - A full foam wash with a wheel detail and tire shine.
            </p>
            <strong>Clay Bar</strong>
            <p className="mainTxt">
              - An engineered resin compound used to remove contaminants from
              the surface of your vehicle's paint.
            </p>
            <strong>Exterior Spray Wax</strong>
            <p className="mainTxt">
              - Works as a layer of protection for your vehicle's paint that
              lasts uo to 4 weeks.
            </p>
            <strong>Carnauba Paste Wax</strong>
            <p className="mainTxt">
              - Carnauba car wax provides an intense shine and warmth to the
              car's paint, resulting in its immense popularity among car
              enthusiasts. Carnauba wax is hard and provides some protection
              against light scratches, but mostly protects against sun damage.
              This will protect your vehicle's paint for up to 5 months.
            </p>
            <strong>Sealant</strong>
            <img className="Image5" src={Image5} alt="" />
            <p className="mainTxt">
              - A fully synthetic product designed to protect a car's surface
              while providing a mirror-like shine.
            </p>
            <strong>Black Exterior Trim Dressing</strong>
            <p className="mainTxt">
              - Darken and restore the black trim on your vehicle for that
              "brand new" look.
            </p>
            <strong>Wash & Wax</strong>
            <p className="mainTxt">
              - This is our most popular option. Full foam wash followed up with
              a wheel detail and tire shine. Then to really bring out the beauty
              in your vehicle I'll use a clay bar as well as your choice between
              the Spray Wax, Paste Wax, or the Sealant!
            </p>
            <strong>1 Step Polish</strong>
            <p className="mainTxt">
              - Have light swirls or scratches that aren't to appealing to the
              eye? This 1 Step Polish is exactly what your looking for.
            </p>
            <img className="Image3" src={Image3} alt="" />
            <h2 style={{ fontFamily: "'Lobster', cursive" }}>
              Interior Services
            </h2>
            <strong>Interior Detail</strong>
            <p className="mainTxt">
              - This includes a full vehicle vacuum. Followed up by a cleaning
              for the center, dash, door panels, and windows.
            </p>
            <strong>Interior Trim Dressing</strong>
            <p className="mainTxt">
              - This will give your interior the ultimate protection against the
              UV rays, as well as giving it a nice shiny finish.
            </p>
            <strong>Leather Treatment</strong>
            <img className="Image4" src={Image4} alt="" />
            <p className="mainTxt">
              - A full cleaning and conditioning for your leather to help keep
              it staying strong.
            </p>
            <strong>Carpet & Seat Shampoo</strong>
            <p className="mainTxt">
              - Dirty carpets or seats? This is an option that will leave you
              highly satisfied.
            </p>
          </div>
        </div>
        <div className="mainImg3" />
        <div className="aboutGabe">
          <img src={GabePic} alt="gabe" className="gabePic"></img>
          <h2 style={{ fontFamily: "'Lobster', cursive" }}>Business Owner</h2>
          <i>Gabriel Chavez</i>
          <br />
          <i>Inland Empire, CA</i>
          <br />
          <i>Professional Car Detailer</i>
          <AboutModal>More Info</AboutModal>
        </div>
      </div>
    </div>

    // <img className="mainImg1" src={MainImg}/>
  );
}

export default Home;
