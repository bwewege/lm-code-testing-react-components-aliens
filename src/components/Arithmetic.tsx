import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface ArithmeticProps {
  arithmetic: string;
  onChangeHandler: (v: string) => void;
}

const Arithmetic: React.FC<ArithmeticProps> = ({
  arithmetic,
  onChangeHandler,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const validate: (value: string) => string | undefined = (value) => {
    if (value !== "4") {
      return "Please select the correct answer. (it's 4 🤫)";
    }

    return undefined;
  };

  return (
    <>
      <label htmlFor="arithmetic">What is 2 + 2?: </label>
      <select
        id="arithmetic"
        value={arithmetic}
        onChange={(e) => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangeHandler(e.target.value);
        }}
      >
        <option value=""> </option>
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>{" "}
      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};

export default Arithmetic;
