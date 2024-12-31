import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let footItems = [];
  let foodItems = ['roti', 'paratha', 'chicken','salad', 'vegetables'];
  return (
    // <React.Fragment>
    //   <h1>Healthy Food</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">Dal</li>
    //     <li class="list-group-item">Chapati</li>
    //     <li class="list-group-item">Chicken</li>
    //     <li class="list-group-item">Mutton</li>
    //     <li class="list-group-item">Green Vegetables</li>
    //   </ul>
    // </React.Fragment>
    // // OR <></>

      <>
        <h1>Healthy Food</h1>
        <ul class="list-group">
          {foodItems.map((item) => (
            <li class="list-group-item">{item}</li>
          ))}
        </ul>
      </>
  );
}

export default App;
