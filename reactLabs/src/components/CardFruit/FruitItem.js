import React from "react";
import { Card } from "antd";
import { Footer } from "./FruitItem.styled";
import LearnMoreButton from "components/LearnMore/LearnMore";
const { Meta } = Card;

const FruitItem = ({ title='No title.', text, image, price, id }) => (
  <Card
    hoverable
    style={{ width: 350, borderRadius: "20px", backgroundColor:"#786048", marginBottom:"50px"}}
    cover={
      <img style={{ borderRadius: "20px", height:"300px"}} alt="example" src={image} />
    }
  >
    <Meta style={{height:"100px"}} title={title} description={text} />
    <br/>
    <p >Price:{price}$</p>
    <Footer>
    <LearnMoreButton id={id} />
    </Footer>
  </Card>
);

export default FruitItem;
