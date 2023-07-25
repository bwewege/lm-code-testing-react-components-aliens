import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeHandler: (v: string) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeHandler,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const validate: (value: string) => string | undefined = (value) => {
    if (value.length < 17 || value.length > 153) {
      return "Keep your reason between 17 and 153 characters...OR DIE!!!";
    }
    return undefined;
  };
  return (
    <>
      <label htmlFor="reasonForSparing">Reason for sparing: </label>
      <textarea
        id="reasonForSparing"
        value={reasonForSparing}
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

export default ReasonForSparing;
