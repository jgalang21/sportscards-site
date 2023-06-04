import React from "react";
import '../App.css'

function Table(){
    return(
        <table>
          <tr>
            <th>Sold Value:</th>
            <th>Your % cut:</th>
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

    )
}

export default Table;