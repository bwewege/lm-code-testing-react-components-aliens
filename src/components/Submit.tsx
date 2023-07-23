interface SubmitProps {
  onClick: () => void;
}

const Submit: React.FC<SubmitProps> = ({ onClick }) => {
  return <button onClick={onClick}>Submit</button>;
};

export default Submit;
