interface NumberofBeingsProps {
  numberOfBeings: string;
  onChangeHandler: (v: string) => void;
}

const NumberofBeings: React.FC<NumberofBeingsProps> = ({
  numberOfBeings,
  onChangeHandler,
}) => (
  <>
    <label htmlFor="numberOfBeings">Number of Beings: </label>
    <input
      id="numberOfBeings"
      type="text"
      value={numberOfBeings}
      onChange={(e) => onChangeHandler(e.target.value)}
    />{" "}
  </>
);

export default NumberofBeings;
