import ErrorMessage from "./ErrorMessage";

interface NumberofBeingsProps {
  numberOfBeings: string;
  onChangeHandler: (v: string) => void;
}

const NumberofBeings: React.FC<NumberofBeingsProps> = ({
  numberOfBeings,
  onChangeHandler,
}) => {
  const validate: (value: string) => string | undefined = (value) => {
    if (
      parseInt(value) < 1000000000 ||
      /[a-zA-Z!@#$%^&*(),.?":{}|<>]/.test(value)
    ) {
      return "Enter a valid number greater than or equal to 1 billion";
    }
    return undefined;
  };

  const errorMessage = validate(numberOfBeings);

  return (
    <>
      <label htmlFor="numberOfBeings">Number of Beings: </label>
      <input
        id="numberOfBeings"
        type="text"
        value={numberOfBeings}
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};

export default NumberofBeings;
