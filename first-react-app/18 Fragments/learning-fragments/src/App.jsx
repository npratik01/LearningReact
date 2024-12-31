import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";


function App() {
  // let foodItems = [];
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
      {/* Ternary Operator's method :  */}
      <h1>Healthy Food</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  );
}

export default App;
