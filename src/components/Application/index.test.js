import React from "react";
import { render } from "@testing-library/react";
import Application from "./index";

describe("Application component", () => {
  test("it renders properly", () => {
    const app = render(<Application />);
    expect(app).toBeTruthy();
  });
});
