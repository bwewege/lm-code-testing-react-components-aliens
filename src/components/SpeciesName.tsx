// This component is a form input field
// It is used to enter the species name

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (v: string) => void;
}
// This inteface defines the props expected by SpeciesName
// onChangeSpeciesName is a function that takes an event (an input change) and returns nothing

const SpeciesName: React.FC<SpeciesNameProps> = (
  { speciesName, onChangeSpeciesName } // declares the component as a function component with the props (SpeciesNameProps)
) => (
  <>
    <label htmlFor="speciesName">Species Name: </label>
    {/*renders label "Species Name" with an htmlFor attribute 
    which associates the label with the input field */}
    <input
      id="speciesName"
      type="text"
      value={speciesName}
      onChange={(e) => onChangeSpeciesName(e.target.value)}
    />{" "}
    {/*renders input field*/}
  </> // this renders a fragment with multiple elements (label and input)
);

export default SpeciesName;
