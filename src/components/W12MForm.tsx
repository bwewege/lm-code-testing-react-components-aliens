import { useState } from "react"; // import useState to manage state in a functional component
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberofBeings from "./NumberOfBeings";
import Arithmetic from "./Arithmetic";
import ReasonForSparing from "./ReasonForSparing";
import Submit from "./Submit";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>(""); // Define variable using useState hook.
  // It returns an array with two elements: the state variable (speciesName) and a function (setSpeciesName) to update it
  const [planetName, setPlanetName] = useState<string>("");
  const [numberOfBeings, setNumberOfBeings] = useState<string>("");
  const [arithmetic, setArithmetic] = useState<string>("");
  const [reasonForSparing, setReasonForSparing] = useState<string>("");

  const handleSubmit = () => {
    console.log("Form Data:");
    console.log("Species Name: ", speciesName);
    console.log("Planet Name: ", planetName);
    console.log("Number of Beings: ", numberOfBeings);
    console.log("What is 2 + 2?: ", arithmetic);
    console.log("Reason for sparing: ", reasonForSparing);
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeHandler={(value) => setSpeciesName(value)} // Renders the SpeciesName component.
        // Passes speciesName state variable and onChangeSpeciesName function as props.
        // OnChangeSpeciesNBame function updates the speciesName state based on input value
      />
      <p></p>
      <PlanetName
        planetName={planetName}
        onChangeHandler={(value) => setPlanetName(value)}
      />
      <p></p>
      <NumberofBeings
        numberOfBeings={numberOfBeings}
        onChangeHandler={(value) => setNumberOfBeings(value)}
      />
      <p></p>
      <Arithmetic
        arithmetic={arithmetic}
        onChangeHandler={(value) => setArithmetic(value)}
      />
      <p>
        {speciesName} are from the planet {planetName} and there are{" "}
        {numberOfBeings} of them, and they know that 2 + 2 is {arithmetic}.
      </p>
      <ReasonForSparing
        reasonForSparing={reasonForSparing}
        onChangeHandler={(value) => setReasonForSparing(value)}
      />
      <p></p>
      <Submit onClick={handleSubmit} />
    </section>
  );
};

export default W12MForm;
