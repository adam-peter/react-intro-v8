const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div", //element
    {}, //attributes
    [
      React.createElement("h1", {}, "Adopt me!"),
      React.createElement(Pet, {name: "Fousek", animal: "Cat", breed: "Cool"}),
      React.createElement(Pet, {name: "Ondrášek", animal: "Dog", breed: "Cool"}),
      React.createElement(Pet, {name: "Charles", animal: "Dog", breed: "Cool"}),
    ]
  );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
