import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import mediumCar from "../imgs/mediumCar.jpg"

const MediumCard = (props) => {
  return (
    <div>
      <Card className="smallCard">
        <CardImg top width="100%" className="smallCardImg" src={mediumCar} alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>Medium</strong></CardTitle>
          <CardSubtitle>Mid-size SUV's & Trucks</CardSubtitle>
          <br/>
          <CardText>Click here to create the package you want for your vehicle.</CardText>
          <a href="http://www.123formbuilder.com/form-5609023/form"><Button color="primary">Book now</Button></a>
        </CardBody>
      </Card>
    </div>
  );
};

export default MediumCard;