import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppProvider } from "./AppContext";
import Header from "../components/Header";

function renderHeader() {
  return render(
    <AppProvider>
      <Header />
    </AppProvider>
  );
}

describe("AppContext - dil ve tema yönetimi", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("başlangıçta Türkçe içerik gösterir", () => {
    renderHeader();
    expect(screen.getByText("SWITCH TO ENGLISH")).toBeTruthy();
  });

  it("dil butonuna basınca İngilizce'ye döner", () => {
    renderHeader();
    fireEvent.click(screen.getByText("SWITCH TO ENGLISH"));
    expect(screen.getByText("TÜRKÇE'YE GEÇ")).toBeTruthy();
  });

  it("tema değişince <html> etiketine dark class'ı eklenir", () => {
    renderHeader();
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    fireEvent.click(screen.getByText("KARANLIK MOD"));
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("tercih localStorage'da saklanır", () => {
    renderHeader();
    fireEvent.click(screen.getByText("SWITCH TO ENGLISH"));
    expect(localStorage.getItem("lang")).toBe(JSON.stringify("en"));
  });
});