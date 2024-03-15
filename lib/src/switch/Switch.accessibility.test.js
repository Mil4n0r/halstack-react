import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcSwitch from "./Switch.tsx";

describe("Switch component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcSwitch
        label="Default label"
        defaultChecked
        value="test-defaultChecked"
        name="test"
        labelPosition="after"
        margin="medium"
        size="medium"
        checked
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for optional mode", async () => {
    const { container } = render(
      <DxcSwitch
        label="Default label"
        defaultChecked
        value="test-defaultChecked"
        name="test"
        labelPosition="after"
        margin="medium"
        size="medium"
        optional
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const { container } = render(
      <DxcSwitch
        label="Default label"
        defaultChecked
        value="test-defaultChecked"
        name="test"
        labelPosition="after"
        margin="medium"
        size="medium"
        disabled
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});