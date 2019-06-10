import React from "react";
import { DxcCheckbox } from "@diaas/dxc-react-cdk";
import styled from "styled-components";
class CheckboxExamples extends React.Component {
  state = {
    isChecked: true
  };
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({
      isChecked: checked
    });
  }
  render() {
    return (
      <div>
        <h1>Checkbox Component</h1>
        <h2>Basic Example</h2>
        <CheckboxExamplesContainer>
          <DxcCheckbox
            checked={this.state.isChecked}
            value="Checkbox1"
            label="Checkbox1"
            labelPosition="after"
            theme="light"
            name="Checkbox"
            disabled={false}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcCheckbox
            checked={this.state.isChecked}
            value="Checkbox2"
            label="Checkbox2"
            labelPosition="after"
            theme="light"
            name="Checkbox"
            disabled={true}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcCheckbox
            checked={this.state.isChecked}
            value="Checkbox3"
            label="Checkbox3"
            labelPosition="before"
            theme="light"
            name="Checkbox"
            disabled={false}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcCheckbox
            checked={this.state.isChecked}
            value="Checkbox4"
            label="Checkbox4"
            labelPosition="before"
            theme="light"
            name="Checkbox"
            disabled={true}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
        </CheckboxExamplesContainer>
        <div style={{ display: "inline-flex", background: "black" }}>
          <DxcCheckbox
            checked={this.state.isChecked}
            value="Checkbox1"
            label="Checkbox1"
            labelPosition="after"
            theme="dark"
            name="Checkbox"
            disabled={false}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcCheckbox
            checked={this.state.isChecked}
            value="Checkbox2"
            label="Checkbox2"
            labelPosition="after"
            theme="dark"
            name="Checkbox"
            disabled={true}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcCheckbox
            checked={this.state.isChecked}
            value="Checkbox3"
            label="Checkbox3"
            labelPosition="before"
            theme="dark"
            name="Checkbox"
            disabled={false}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcCheckbox
            checked={this.state.isChecked}
            value="Checkbox4"
            label="Checkbox4"
            labelPosition="before"
            theme="dark"
            name="Checkbox"
            disabled={true}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
        </div>
      </div>
    );
  }
}

const CheckboxExamplesContainer = styled.div`
  display: flex;
`;
export default CheckboxExamples;