import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface PlanetNameProps {
  planetName: string;
  onChangeHandler: (v: string) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangeHandler,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const validate: (value: string) => string | undefined = (value) => {
    if (value.length < 2 || value.length > 49) {
      return "Planet Name must be between 2 and 49 character.";
    }
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return "Planet name cannot contain special characters";
    }
    return undefined;
  };

  return (
    <>
      <label htmlFor="planetName">Planet Name: </label>
      <input
        id="planetName"
        type="text"
        value={planetName}
        onChange={(e) => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangeHandler(e.target.value);
        }}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};

export default PlanetName;
