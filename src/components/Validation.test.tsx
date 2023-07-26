import { render, screen } from "@testing-library/react";
import Arithmetic from "./Arithmetic";
import NumberofBeings from "./NumberOfBeings";
import PlanetName from "./PlanetName";
import ReasonForSparing from "./ReasonForSparing";
import SpeciesName from "./SpeciesName";
import ErrorMessage from "./ErrorMessage";

describe("validation tests for all components", () => {
  test(`pass valid input to SpeciesName, no error should display`, () => {
    render(<SpeciesName speciesName="Klingon" onChangeHandler={() => {}} />);
    const errorMessage = screen.queryByText(
      /Species name must be between 3 and 23 characters. |Species name cannot contain numbers or special characters./
    );
    expect(errorMessage).not.toBeInTheDocument();
  });

  test("short name, error should display", () => {
    render(<SpeciesName speciesName="Xi" onChangeHandler={() => {}} />);
    const errorMessage = screen.getByText(
      "Species name must be between 3 and 23 characters."
    );
    expect(errorMessage).toBeInstanceOf(Node);
  });

  // test("long name, error should display", () => {
  //   render(
  //     <SpeciesName
  //       speciesName="The Conquering Kingdom of Andromeda Prime"
  //       onChangeHandler={() => {}}
  //     />
  //   );
  //   const errorMessage = screen.getByText(
  //     "Species name must be between 3 and 23 characters."
  //   );
  //   expect(errorMessage).toBeInTheDocument();
  // });

  // test("numbers in name, error should display", () => {
  //   render(
  //     <SpeciesName speciesName="Planet 9ers" onChangeHandler={() => {}} />
  //   );
  //   const errorMessage = screen.getByText(
  //     "Species name cannot contain numbers or special characters."
  //   );
  //   expect(errorMessage).toBeInTheDocument();
  // });

  // test("special characters in name, error should display", () => {
  //   render(
  //     <SpeciesName speciesName="Kingdom of &%^$" onChangeHandler={() => {}} />
  //   );
  //   const errorMessage = screen.getByText(
  //     "Species name cannot contain numbers or special characters."
  //   );
  //   expect(errorMessage).toBeInTheDocument();
  // });
});
