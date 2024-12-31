import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
let foodItems = ('roti', 'paratha', 'chicken','salad', 'vegetables' );
  return (
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
