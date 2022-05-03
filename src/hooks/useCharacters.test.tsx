import { renderHook } from "@testing-library/react";
import { reactQueryWrapper } from "../utils/testUtils";
import useCharacters from "./useCharacters";

describe("useCharacters", () => {
  it("should return an empty array of characters", () => {
    const { result } = renderHook(() => useCharacters({}), {
      wrapper: reactQueryWrapper,
    });
    expect(result.current.charactersList).toEqual([]);
  });
});
