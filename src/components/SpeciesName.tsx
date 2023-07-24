// This component is a form input field
// It is used to enter the species name

import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface SpeciesNameProps {
  speciesName: string;
  onChangeHandler: (v: string) => void; // just give me something that takes a string and returns nothing
}
// This inteface defines the props expected by SpeciesName
// onChangeSpeciesName is a function that takes an event (an input change) and returns nothing

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeHandler,
}) => {
  // declares the component as a function component with the props (SpeciesNameProps)

  const [errorMessage, setErrorMessage] = useState<string | undefined>(""); // this is a hook. It declares a state variable called errorMessage and a function to set it called setErrorMessage. It initializes errorMessage to an empty string.

  const validate: (value: string) => string | undefined = (value) => {
    if (value.length < 3 || value.length > 23) {
      return "Species name must be between 3 and 23 characters.";
    }

    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return "Species name cannot contain numbers or special characters.";
    }
    return undefined;
  };

  return (
    <>
      <label htmlFor="speciesName">Species Name: </label>
      {/*renders label "Species Name" with an htmlFor attribute 
    which associates the label with the input field */}
      <input
        id="speciesName"
        type="text"
        value={speciesName}
        onChange={(e) => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangeHandler(e.target.value); // better than onChange=onChangeHandler. wrapping simplifies for everyone else.
        }}
      />
      {/*renders input field*/}
      <ErrorMessage errorMessage={errorMessage} />
    </> // this renders a fragment with multiple elements (label and input)
  );
};
export default SpeciesName;
