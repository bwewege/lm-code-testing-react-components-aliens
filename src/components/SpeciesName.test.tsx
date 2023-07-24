import { render, screen } from "@testing-library/react";
import SpeciesName from "./SpeciesName";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

describe("SpeciesName component test", () => {
  test("SpeciesName component should render", () => {
    render(<SpeciesName speciesName="Humans" onChangeSpeciesName={() => {}} />);
    const labelElement = screen.getByLabelText("Species Name:");
    const inputElement = screen.getByRole("textbox");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
  test("display provided value for SpeciesName", () => {
    render(<SpeciesName speciesName="Humans" onChangeSpeciesName={() => {}} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("Humans");
  });
  test("should call onChangeSpeciesName with correct parameters", async () => {
    const onChangeSpeciesName = jest.fn();

    render(
      <SpeciesName speciesName="" onChangeSpeciesName={onChangeSpeciesName} />
    );

    const inputElement = screen.getByRole("textbox");

    await userEvent.type(inputElement, "Mar");

    expect(onChangeSpeciesName).toHaveBeenCalledTimes(3);

    expect(onChangeSpeciesName).toHaveBeenLastCalledWith("r");
  });
});
