import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styles';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import { Cart } from "containers/Cart/Cart";
import { FruitPage } from "containers/FruitPage/FruitPage";
const Navigation = () => (
  <Router>
    <LinkingWrapper>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/shop" activeClassName="selected">Shop</NavLink>
        </li>
        <li>
        <NavLink exact to="/Cart" activeClassName="selected">Cart</NavLink>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/shop" element={<Shop />}/>
        <Route exact path="/fruit/:fruitId" element={<FruitPage />}/> 
        <Route exact path="/Cart" element={<Cart />}/>
      </Routes>
    </LinkingWrapper>
  </Router>
);

export default Navigation;