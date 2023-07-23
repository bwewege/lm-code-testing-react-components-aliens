import { useState } from "react"; // import useState to manage state in a functional component
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberofBeings from "./NumberOfBeings";
import Arithmetic from "./Arithmetic";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("Humans"); // Define variable using useState hook.
  // It returns an array with two elements: the state variable (speciesName) and a function (setSpeciesName) to update it
  const [planetName, setPlanetName] = useState<string>("Earth");
  const [numberOfBeings, setNumberOfBeings] = useState<number>(1);
  const [arithmetic, setArithmetic] = useState<string>("Not 4");

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(e: any) => setSpeciesName(e.target.value)} // Renders the SpeciesName component.
        // Passes speciesName state variable and onChangeSpeciesName function as props.
        // OnChangeSpeciesNBame function updates the speciesName state based on input value
      />
      <p></p>
      <PlanetName
        planetName={planetName}
        onChangePlanetName={(e: any) => setPlanetName(e.target.value)}
      />
      <p></p>
      <NumberofBeings
        numberOfBeings={numberOfBeings}
        onChangeNumberOfBeings={(e: any) => setNumberOfBeings(e.target.value)}
      />
      <p></p>
      <Arithmetic
        arithmetic={arithmetic}
        onChangeArithmetic={(e: any) => setArithmetic(e.target.value)}
      />
      <p>
        {speciesName} are from the planet {planetName} and there are{" "}
        {numberOfBeings} of them, and they know that 2 + 2 is {arithmetic}.
      </p>
    </section>
  );
};

export default W12MForm;
