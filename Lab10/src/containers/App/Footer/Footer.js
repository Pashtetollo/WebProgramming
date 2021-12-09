import React from "react";
import { Wrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase } from "./Footer.styled";
import {
    TwitterOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    FacebookOutlined,
  } from "@ant-design/icons";
  import {AppleAlt} from '@styled-icons/fa-solid';

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconBase component={AppleAlt} color='darkgreen' />
        <h1>Fruits Shop</h1>
      </LogoWrapper>
      <p>Yummy apple!
      <br /> Get yours now!</p>
      <VerticalLine />
      <IconsWrapper>
          <IconBase component={YoutubeOutlined} color='#FF0000'/>
          <IconBase component={TwitterOutlined} color='#03A9F4' />
          <IconBase component={FacebookOutlined} color='#0000FF' />
          <IconBase component={InstagramOutlined} color='#C13584'/>
      </IconsWrapper>
      <VerticalLine />
      <StyledText>© Fruits Shop 2021 all rights reserved</StyledText>
    </Wrapper>
  );
};

export default Footer;
