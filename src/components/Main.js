import React from "react";
import '../App.css'
import logo from '../images/jamar_chase.jpg'

function Main() {
  return (
    <div className="stylesheet">
      <h1>Welcome to Jeremy's cards and collectibles!</h1>
      <h3>Enjoying the hobby one card at a time at an affordable price!</h3>
      
      <div className="container">
        <img className="chase" src={logo} alt="logo" />
        <h3>For over 50 years, Jeremy's cards has been the #1 provider for all your
          needs in sportscards. We have a wide variety of football and basketball cards!
          So there's tons of variety for you.
        </h3>

        <h2> We are currently accepting consignments! ($5 minimum value)</h2>

        <table>
          <tr>
            <th>Sold Value</th>
            <th>Your % cut</th>
          </tr>
       
          <tr>
            <td> Under $10</td>
            <td> $5 flat fee!</td>
          </tr>

          <tr>
            <td> $10 - $50 </td>
            <td> 82%</td>
          </tr>

          <tr>
            <td> $51 - $100</td>
            <td> 84%</td>
          </tr>

          <tr>
            <td> $101 - $250</td>
            <td> 85%</td>
          </tr>

          <tr>
            <td> $250 - $350</td>
            <td> 87%</td>
          </tr>

          <tr>
            <td> $350 - $800</td>
            <td> 90%</td>
          </tr>

          <tr>
            <td> $800 - $1500</td>
            <td> 93%</td>
          </tr>
          
          <tr>
            <td> $1500 or more!</td>
            <td> 95% </td>
          </tr>
    
        </table>

        

      </div>
      
   
      <h3>wow</h3>
    </div>
  );
}

export default Main;
