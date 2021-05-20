import React, { Component } from "react";
import "./App.css";

import { DisplayInput } from "./components/display/DisplayInput.js";
import { Button } from "./components/button/Button.js";
import { ClearButton } from "./components/clear-button/ClearButton.js";

import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  handleInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  handleMultiply = (val) => {
    if (val === "x") {
      this.setState({ input: this.state.input + val.replace("x", "*") });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calculator-wrapper">
          <DisplayInput input={this.state.input}></DisplayInput>
          <div className="row">
            <Button handleClick={this.handleInput}>7</Button>
            <Button handleClick={this.handleInput}>8</Button>
            <Button handleClick={this.handleInput}>9</Button>
            <Button handleClick={this.handleMultiply}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>4</Button>
            <Button handleClick={this.handleInput}>5</Button>
            <Button handleClick={this.handleInput}>6</Button>
            <Button handleClick={this.handleInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>1</Button>
            <Button handleClick={this.handleInput}>2</Button>
            <Button handleClick={this.handleInput}>3</Button>
            <Button handleClick={this.handleInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>0</Button>
            <Button handleClick={this.handleInput}>.</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.handleInput}>/</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
