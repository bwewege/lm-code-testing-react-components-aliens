interface NumberofBeingsProps {
  numberOfBeings: number;
  onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberofBeings: React.FC<NumberofBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
}) => (
  <>
    <label htmlFor="numberOfBeings">Number of Beings: </label>
    <input
      id="numberOfBeings"
      type="text"
      value={numberOfBeings}
      onChange={onChangeNumberOfBeings}
    />{" "}
  </>
);

export default NumberofBeings;
