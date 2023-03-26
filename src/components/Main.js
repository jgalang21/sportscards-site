import React from "react";
import '../App.css'
import jc from "../images/jamar_chase.jpg"


function Main(){
    return(
        <div className="stylesheet">
         <h1 >Welcome to Jeremy's cards and collectibles!</h1>
         <h3>Enjoying the hobby one card at a time at an affordable price!</h3>
         <img src={jc}></img>
         <h4> hi</h4>
        </div>
        
    )
}

export default Main;