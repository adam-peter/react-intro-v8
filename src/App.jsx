import React from "react";
import ReactDOM from "react-dom/client";

import Pet from "./Pet";

const App = () => {
  const names = ["Fousek", "Ondrášek", "Charles"]
  const animals = ["Cat", "Dog", "Dog"]
  const breed = "Cool"
  const pets = []
  for (let i = 0; i<3; i++){
    pets.push(<Pet name={names[i]} animal={animals[i]} breed={breed}/>)
  }
  return (
    <div>
      <h1>Adopt Me!</h1>
      {pets}
    </div>
  )
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
