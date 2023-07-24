import { render, screen } from "@testing-library/react";

import SpeciesName from "./SpeciesName";

import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("should call onChangeSpeciesName with correct parameters", async () => {
  const mockOnChange = jest.fn();

  render(<SpeciesName speciesName="" onChangeHandler={mockOnChange} />);

  const inputElement = screen.getByRole("textbox");

  await userEvent.type(inputElement, "Mar");

  expect(mockOnChange).toHaveBeenCalledTimes(3);

  expect(mockOnChange).toHaveBeenLastCalledWith("r");
});
