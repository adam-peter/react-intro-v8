import React from "react";

import Pet from "./Pet";

const Result = ({ pets, status }) => {
  return (
    <div className="search">
      {pets.map((pet) => {
        return (
          <Pet
            id={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        );
      })}
    </div>
  );
};

export default Result;
