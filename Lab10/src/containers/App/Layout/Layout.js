import React from "react";
import { StyledHeader, IconsWrapper } from "./Layout.styles";
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { AppleAlt } from "@styled-icons/fa-solid";
import { IconBase } from "../Footer/Footer.styled";
const Layout = () => (
  <StyledHeader title="Fruits Shop">
    <div>
      <IconsWrapper>
      <IconBase component={AppleAlt} color='darkgreen' />
      </IconsWrapper>
      <p>Fruits Shop</p>
    </div>
    <div>
      <IconsWrapper>
        
      <IconBase component={TwitterOutlined} color='#03A9F4' />
      
      <IconBase component={FacebookOutlined} color='#0000FF' />
      
      <IconBase component={InstagramOutlined} color='#C13584' />
      </IconsWrapper>
    </div>
    <div>
      <IconsWrapper>
      
      <IconBase component={LoginOutlined} color='darkgreen' />
      </IconsWrapper>
    </div>
  </StyledHeader>
);

export default Layout;