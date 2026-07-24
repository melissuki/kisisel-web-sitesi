import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";

describe("useLocalStorage hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("initialValue döndürür (localStorage boşsa)", () => {
    const { result } = renderHook(() => useLocalStorage("lang", "tr"));
    expect(result.current[0]).toBe("tr");
  });

  it("değer değişince localStorage'a JSON olarak yazar", () => {
    const { result } = renderHook(() => useLocalStorage("lang", "tr"));
    act(() => {
      result.current[1]("en");
    });
    expect(result.current[0]).toBe("en");
    expect(localStorage.getItem("lang")).toBe(JSON.stringify("en"));
  });

  it("localStorage'daki mevcut değeri başlangıçta okur", () => {
    localStorage.setItem("theme", JSON.stringify("dark"));
    const { result } = renderHook(() => useLocalStorage("theme", "light"));
    expect(result.current[0]).toBe("dark");
  });
});