interface NumberofBeingsProps {
  numberOfBeings: number;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      onChange={onChangeHandler}
    />{" "}
  </>
);

export default NumberofBeings;
