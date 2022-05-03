import { renderHook } from "@testing-library/react";
import { reactQueryWrapper } from "../utils/testUtils";
import useBeers from "./useBeers";

describe("useBeers", () => {
  it("should return an empty array of characters", () => {
    const { result } = renderHook(() => useBeers(), {
      wrapper: reactQueryWrapper,
    });
    expect(result.current.beersList).toEqual([]);
  });
});
