import React from "react";
import {Button} from "antd";
import { NavLink } from "react-router-dom";

const LearnMoreButton = ({id = 0}) => (
    <NavLink exact to={`/fruit/${id}`}>
        <Button style={{backgroundColor:"#1890ff"}}>Details</Button>
    </NavLink>
)

export default LearnMoreButton;