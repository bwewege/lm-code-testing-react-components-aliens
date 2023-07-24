interface PlanetNameProps {
  planetName: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      onChange={onChangeHandler}
    />{" "}
  </>
);

export default PlanetName;
