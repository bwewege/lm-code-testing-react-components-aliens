interface PlanetNameProps {
  planetName: string;
  onChangeHandler: (v: string) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangeHandler,
}) => (
  <>
    <label htmlFor="planetName">Planet Name: </label>
    <input
      id="planetName"
      type="text"
      value={planetName}
      onChange={(e) => onChangeHandler(e.target.value)}
    />{" "}
  </>
);

export default PlanetName;
