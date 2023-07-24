interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeHandler: (v: string) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeHandler,
}) => (
  <>
    <label htmlFor="reasonForSparing">Reason for sparing: </label>
    <textarea
      id="reasonForSparing"
      value={reasonForSparing}
      onChange={(e) => onChangeHandler(e.target.value)}
    />{" "}
  </>
);

export default ReasonForSparing;
