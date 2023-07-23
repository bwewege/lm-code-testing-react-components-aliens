interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
// This inteface defines the props expected by SpeciesName
// onChangeSpeciesName is a function that takes an event (an input change) and returns nothing

const PlanetName: React.FC<PlanetNameProps> = (
  { planetName: planetName, onChangePlanetName: onChangePlanetName } // declares the component as a function component with the props (SpeciesNameProps)
) => (
  <>
    <label htmlFor="planetName">Planet Name: </label>
    {/* renders label "Species Name" with an htmlFor attribute 
    which associates the label with the input field */}
    <input
      id="planetName"
      type="text"
      value={planetName}
      onChange={onChangePlanetName}
    />{" "}
    {/*renders input field*/}
  </> // this renders a fragment with multiple elements (label and input)
);

export default PlanetName;
