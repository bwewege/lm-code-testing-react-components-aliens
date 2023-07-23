import { render, screen } from "@testing-library/react";
import SpeciesName from "./SpeciesName";

describe("SpeciesName component test", () => {
  test("SpeciesName component should render", () => {
    render(<SpeciesName speciesName="Humans" onChangeSpeciesName={() => {}} />);
    const labelElement = screen.getByLabelText("Species Name:");
    const inputElement = screen.getByRole("textbox");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
});
