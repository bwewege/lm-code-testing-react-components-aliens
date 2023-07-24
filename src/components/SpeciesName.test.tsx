import { render, screen } from "@testing-library/react";
import Arithmetic from "./Arithmetic";
import NumberofBeings from "./NumberOfBeings";
import PlanetName from "./PlanetName";
import ReasonForSparing from "./ReasonForSparing";
import SpeciesName from "./SpeciesName";

import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

describe("component render tests", () => {
  // test("Arithmetic component should render", () => {
  //   render(<Arithmetic arithmetic="4" onChangeSpeciesName={() => {}} />);
  //   const labelElement = screen.getByLabelText("Species Name:");
  //   const inputElement = screen.getByRole("textbox");
  //   expect(labelElement).toBeInTheDocument();
  //   expect(inputElement).toBeInTheDocument();
  // });
  // test("NumberofBeings component should render", () => {
  //   render(<SpeciesName speciesName="Humans" onChangeSpeciesName={() => {}} />);
  //   const labelElement = screen.getByLabelText("Species Name:");
  //   const inputElement = screen.getByRole("textbox");
  //   expect(labelElement).toBeInTheDocument();
  //   expect(inputElement).toBeInTheDocument();
  // });
  // test("PlanetName component should render", () => {
  //   render(<SpeciesName speciesName="Humans" onChangeSpeciesName={() => {}} />);
  //   const labelElement = screen.getByLabelText("Species Name:");
  //   const inputElement = screen.getByRole("textbox");
  //   expect(labelElement).toBeInTheDocument();
  //   expect(inputElement).toBeInTheDocument();
  // });
  // test("ReasonforSparing component should render", () => {
  //   render(<SpeciesName speciesName="Humans" onChangeSpeciesName={() => {}} />);
  //   const labelElement = screen.getByLabelText("Species Name:");
  //   const inputElement = screen.getByRole("textbox");
  //   expect(labelElement).toBeInTheDocument();
  //   expect(inputElement).toBeInTheDocument();
  // });
  test("SpeciesName component should render", () => {
    render(<SpeciesName speciesName="Humans" onChangeHandler={() => {}} />);
    const labelElement = screen.getByLabelText("Species Name:");
    const inputElement = screen.getByRole("textbox");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  test("display provided value for SpeciesName", () => {
    render(<SpeciesName speciesName="Humans" onChangeHandler={() => {}} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("Humans");
  });
  test("should call onChangeSpeciesName with correct parameters", async () => {
    const mockOnChange = jest.fn();

    render(<SpeciesName speciesName="" onChangeHandler={mockOnChange} />);

    const inputElement = screen.getByRole("textbox");

    await userEvent.type(inputElement, "Mar");

    expect(mockOnChange).toHaveBeenCalledTimes(3);

    expect(mockOnChange).toHaveBeenLastCalledWith("r");
  });
});
