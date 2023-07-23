import { useState } from "react"; // import useState to manage state in a functional component
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("Humans"); // Define variable using useState hook.
  // It returns an array with two elements: the state variable (speciesName) and a function (setSpeciesName) to update it
  const [planetName, setPlanetName] = useState<string>("Earth");

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(e: any) => setSpeciesName(e.target.value)} // Renders the SpeciesName component.
        // Passes speciesName state variable and onChangeSpeciesName function as props.
        // OnChangeSpeciesNBame function updates the speciesName state based on input value
      />
      <PlanetName
        planetName={planetName}
        onChangePlanetName={(e: any) => setPlanetName(e.target.value)}
      />
    </section>
  );
};

export default W12MForm;
