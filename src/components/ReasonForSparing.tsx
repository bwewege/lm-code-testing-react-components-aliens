interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
      onChange={onChangeHandler}
    />{" "}
  </>
);

export default ReasonForSparing;
