import { render, screen } from "@testing-library/react";
import Arithmetic from "./Arithmetic";
import NumberofBeings from "./NumberOfBeings";
import PlanetName from "./PlanetName";
import ReasonForSparing from "./ReasonForSparing";
import SpeciesName from "./SpeciesName";

import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

describe("onChange with correct parameters tests", () => {
  test("should call onChange for Arithmetic with correct parameters", async () => {
    const mockOnChange = jest.fn();
    render(<Arithmetic arithmetic="" onChangeHandler={mockOnChange} />);
    const inputElement = screen.getByRole("combobox");
    await userEvent.selectOptions(inputElement, "4");
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("4");
  });
  test("should call onChange for NumberofBeings with correct parameters", async () => {
    const mockOnChange = jest.fn();
    render(<NumberofBeings numberOfBeings="" onChangeHandler={mockOnChange} />);
    const inputElement = screen.getByRole("textbox");
    await userEvent.type(inputElement, "3");
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("3");
  });
  test("should call onChange for PlanetName with correct parameters", async () => {
    const mockOnChange = jest.fn();
    render(<PlanetName planetName="" onChangeHandler={mockOnChange} />);
    const inputElement = screen.getByRole("textbox");
    await userEvent.type(inputElement, "Mars");
    expect(mockOnChange).toHaveBeenCalledTimes(4);
    expect(mockOnChange).toHaveBeenLastCalledWith("s");
  });
  test("should call onChange for ReasonForSparing with correct parameters", async () => {
    const mockOnChange = jest.fn();
    render(
      <ReasonForSparing reasonForSparing="" onChangeHandler={mockOnChange} />
    );
    const inputElement = screen.getByRole("textbox");
    await userEvent.type(inputElement, "None!");
    expect(mockOnChange).toHaveBeenCalledTimes(5);
    expect(mockOnChange).toHaveBeenLastCalledWith("!");
  });
  test("should call onChange for SpeciesName with correct parameters", async () => {
    const mockOnChange = jest.fn();
    render(<SpeciesName speciesName="" onChangeHandler={mockOnChange} />);
    const inputElement = screen.getByRole("textbox");
    await userEvent.type(inputElement, "Mar");
    expect(mockOnChange).toHaveBeenCalledTimes(3);
    expect(mockOnChange).toHaveBeenLastCalledWith("r");
  });
});
