import { render, screen } from "@testing-library/react";
import Arithmetic from "./Arithmetic";
import NumberofBeings from "./NumberOfBeings";
import PlanetName from "./PlanetName";
import ReasonForSparing from "./ReasonForSparing";
import SpeciesName from "./SpeciesName";
import Submit from "./Submit";

describe("component render and value through props tests", () => {
  test("Arithmetic component should render and display value", () => {
    render(<Arithmetic arithmetic="Not 4" onChangeHandler={() => {}} />);
    const labelElement = screen.getByLabelText("What is 2 + 2?:");
    const inputElement = screen.getByRole("combobox");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("Not 4");
  });
  test("NumberofBeings component should render and display value", () => {
    render(
      <NumberofBeings numberOfBeings="8000000000" onChangeHandler={() => {}} />
    );
    const labelElement = screen.getByLabelText("Number of Beings:");
    const inputElement = screen.getByRole("textbox");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("8000000000");
  });
  test("PlanetName component should render and display value", () => {
    render(<PlanetName planetName="Earth" onChangeHandler={() => {}} />);
    const labelElement = screen.getByLabelText("Planet Name:");
    const inputElement = screen.getByRole("textbox");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("Earth");
  });
  test("ReasonForSparing component should render and display value", () => {
    render(
      <ReasonForSparing reasonForSparing="None!" onChangeHandler={() => {}} />
    );
    const labelElement = screen.getByLabelText("Reason for sparing:");
    const inputElement = screen.getByRole("textbox");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("None!");
  });
  test("SpeciesName component should render and display value", () => {
    render(<SpeciesName speciesName="Humans" onChangeHandler={() => {}} />);
    const labelElement = screen.getByLabelText("Species Name:");
    const inputElement = screen.getByRole("textbox");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
  test("Submit component should render", () => {
    render(<Submit onClick={() => {}} />);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();
  });
});
