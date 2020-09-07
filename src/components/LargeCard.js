import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import largeCar from "../imgs/largeTruck.jpg";

const LargeCard = (props) => {
  return (
    <div>
      <Card className="smallCard">
        <CardImg top width="100%" className="smallCardImg" src={largeCar} alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>Large</strong></CardTitle>
          <CardSubtitle>Large SUV's, Trucks, & Vans</CardSubtitle>
          <br/>
          <CardText>Click here to create the package you want for your vehicle.</CardText>
          <a href="http://www.123formbuilder.com/form-5609029/form"><Button color="primary">Book now</Button></a>
        </CardBody>
      </Card>
    </div>
  );
};

export default LargeCard;