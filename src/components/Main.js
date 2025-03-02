import React from "react";
import Table from "./Table";
import '../App.css'
import logo from '../images/jamar_chase.jpg'
import psa from '../images/psa-logo.jpg'
import sgc from '../images/SGC_White-New.png'
import beckett from '../images/Beckett-Grading-logo.png'

import Button from 'react-bootstrap/Button';

function Main() {

  const handleClick = () => {
    console.log("Button has been clicked - Success!");
  };


  return (
    <div className="stylesheet">
      <h1>Welcome to Jeremy's cards and collectibles!</h1>
      <h3 style={{color: "orange"}}>Enjoying the hobby one card at a time at an affordable price!</h3>
      
      <div className="container">
        <img className="chase" src={logo} alt="logo" />
        <h3>For over 50 years, Jeremy's cards has been the #1 provider for all your
          needs in sportscards. We have a wide variety of football and basketball cards!
          So there's tons of variety for you.
        </h3>
        <h2> We are currently accepting consignments! ($5 minimum value)</h2>
        <Table/>
        
      </div>
      
      <Button onClick={handleClick}>
        Click me for testing
      </Button>
      
      <div className="grading">
        <h2>We do bulk grading as well! Please see the sites below for updated prices!</h2>
        <a href="https://www.psacard.com/"><img src={psa} alt="logo"/></a>
        <a href="https://www.gosgc.com/"><img  src={sgc} alt="logo"/></a>
        <a href="https://www.beckett.com/grading"><img  src={beckett} alt="logo"/></a>
    
      </div>
      

    </div>
  );
}

export default Main;
