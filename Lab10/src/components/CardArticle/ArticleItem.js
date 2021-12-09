import React from "react";
import { Card} from "antd";
import { Footer } from "./ArticleItem.styled";
const { Meta } = Card;

const CardArticle = ({ title='No title.', text, imageSrc, id }) => (
  <Card
    hoverable
    style={{ width: 350, borderRadius: "20px", backgroundColor:"#786048" }}
    cover={
      <img style={{ borderRadius: "20px", height:"300px"}} alt="example" src={imageSrc} />
    }
  >
    <Meta title={title} description={text} />
    <Footer>
    </Footer>
  </Card>
);

export default CardArticle;
