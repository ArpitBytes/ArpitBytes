import { act, fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("gsap", () => ({
  __esModule: true,
  default: {
    timeline: () => ({
      from: jest.fn().mockReturnThis(),
    }),
  },
}));

describe("Home page navigation", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("navigates to the about page when Enter is pressed", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Home />);

    fireEvent.keyDown(document, { key: "Enter" });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(navigate).toHaveBeenCalledWith("/about");
  });

  it("navigates to the about page when the screen is clicked", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Home />);

    fireEvent.click(screen.getByRole("main"));

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(navigate).toHaveBeenCalledWith("/about");
  });
});
