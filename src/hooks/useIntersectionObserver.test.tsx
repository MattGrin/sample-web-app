import { renderHook } from "@testing-library/react";
import useIntersectionObserver from "./useIntersectionObserver";

class FakeIntersectionObserver {
  readonly root: Element | null;
  readonly rootMargin: string;
  readonly thresholds: ReadonlyArray<number>;

  constructor() {
    this.root = null;
    this.rootMargin = "";
    this.thresholds = [];
  }
  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  unobserve() {}
}

describe("useIntersectionObserver", () => {
  global.IntersectionObserver = FakeIntersectionObserver;
  it("should return an array with a ref and a boolean", () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      })
    );
    expect(result.current).toEqual([{ current: null }, false]);
  });
});
