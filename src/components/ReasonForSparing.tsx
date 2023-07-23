interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
}) => (
  <>
    <label htmlFor="reasonForSparing">Reason for sparing: </label>
    <textarea
      id="reasonForSparing"
      value={reasonForSparing}
      onChange={onChangeReasonForSparing}
    />{" "}
  </>
);

export default ReasonForSparing;
