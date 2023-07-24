interface ArithmeticProps {
  arithmetic: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Arithmetic: React.FC<ArithmeticProps> = ({
  arithmetic,
  onChangeHandler,
}) => (
  <>
    <label htmlFor="arithmetic">What is 2 + 2?: </label>
    <select id="arithmetic" value={arithmetic} onChange={onChangeHandler}>
      <option value="4">4</option>
      <option value="Not 4">Not 4</option>
    </select>{" "}
  </>
);

export default Arithmetic;
