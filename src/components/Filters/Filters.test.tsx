import { render, screen } from "@testing-library/react";
import { Character } from "../../services/characters/characters.types";
import { ReactDispatcher } from "../../utils/utils.types";
import Filters from "./Filters";

describe("Filters", () => {
  it("renders without crashing", () => {
    render(
      <Filters
        name=""
        status="alive"
        gender="unknown"
        setGender={(() => {}) as ReactDispatcher<Character["gender"] | null>}
        setStatus={(() => {}) as ReactDispatcher<Character["status"] | null>}
        setName={(() => {}) as ReactDispatcher<string>}
        handleClearFilter={() => {}}
        loading={false}
      />
    );
    const foundElement = screen.getByTestId("filters");
    expect(foundElement).toBeInTheDocument();
  });
});
