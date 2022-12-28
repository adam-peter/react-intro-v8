import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import Result from "./Result";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = {
      animal: formData.get("animal") ?? "",
      breed: formData.get("breed") ?? "",
      location: formData.get("location") ?? "",
    };

    setRequestParams(obj)
  };

  return (
    <div className="search-params">
      <form onSubmit={submitHandler}>
        <label htmlFor="location">
          Location
          <input name="location" id="location" placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option key="animalNothing"></option>
            {ANIMALS.map((animal) => {
              return <option key={animal}>{animal}</option>;
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select id="breed" disabled={breeds.length === 0} name="breed">
            <option key="breedNothing"></option>
            {breeds.map((breed) => {
              return <option key={breed}>{breed}</option>;
            })}
          </select>
        </label>

        <button>Submit</button>
      </form>

      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
