import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero;
  if (images.length) {
    hero = images[0];
  } else {
    hero = "http://pets-images.dev.apis.com/pets/none.jpg";
  }

  return (
    <Link className="pet" to={`/details/${id}`}>
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
