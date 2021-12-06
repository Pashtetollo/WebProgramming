import React from "react";
import Layout from "./Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div style={{backgroundColor:"#FFFDE0", minHeight:"100vh", overflow:"hidden"}}>
      <Layout />
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;
