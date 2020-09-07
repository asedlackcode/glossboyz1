import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AboutModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        color="primary"
        style={{ marginTop: "15px", marginBottom: "20px" }}
        onClick={toggle}
      >
        More Info
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>About Me</ModalHeader>
        <ModalBody>
          Hi, my name is Gabriel Chavez and I founded Glossboyz Detailing in
          2017. The business was inspired after I had purchased my first brand
          new car. Although at first, I had only purchased all the chemicals and
          tools for the purpose of maintaining my cars, a friend soon asked me
          if I would be interested in detailing his car. Very soon after I had
          multiple friends asking me the same question and that is how GlossBoyz
          Auto Detailing became a true side hustle. After about a year and a
          half of working 2 jobs and detailing on the side I decided to take a
          leap and begin detailing full time. For the first 2 years I was
          mobile, however I needed to be able to hook up to a water and
          electricity source in order to be able to detail at other locations
          that were not my home. Working out of a Honda Civic Coupe was
          difficult but I made it work because I had to. Here I am almost 3
          years later, I have now traded my car in for a truck and have a
          full-time mobile detailing service. I have come a long way from where
          I started and still have a long way to go to reach my goals with this
          business. I have always been a huge car enthusiast, with my main love
          being for tuner cars, but also loving classics and trucks. Being a
          true car enthusiast, I have always had a passion for good looking
          cars, and making cars look good.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AboutModal;
