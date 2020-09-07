import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import smallCar from "../imgs/smallCar.jpg"

const SmallCard = (props) => {
  return (
    <div>
      <Card className="smallCard">
        <CardImg top width="100%" className="smallCardImg" src={smallCar} alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>Small</strong></CardTitle>
          <CardSubtitle>Sedans, Coupes, Hatchbacks, Crossovers</CardSubtitle>
          <CardText>Click here to create the package you want for your vehicle.</CardText>
          <a href="http://www.123formbuilder.com/form-5608078/form"><Button color="primary">Book now</Button></a>
        </CardBody>
      </Card>
    </div>
  );
};

export default SmallCard;