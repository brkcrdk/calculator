import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  addToInput = val => {
    this.setState({
      input: this.state.input + val
    });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  handleZero = val => {
    //eğer input boşsa .0 yaz yok ise 0 yaz
    if (this.state.input === "") {
      this.setState({
        input: "0."
      });
    } else {
      this.setState({
        input: this.state.input + val
      });
    }
  };
  handleDecimal = () => {
    if (this.state.input === "") {
      this.setState({
        input: "0."
      });
    } else if (this.state.input.indexOf(".") === -1) {
      this.setState({
        input: this.state.input + "."
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input id="display" input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToInput} id="seven">
              7
            </Button>
            <Button handleClick={this.addToInput} id="eight">
              8
            </Button>
            <Button handleClick={this.addToInput} id="nine">
              9
            </Button>
            <Button handleClick={this.addToInput} id="divide">
              /
            </Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} id="four">
              4
            </Button>
            <Button handleClick={this.addToInput} id="five">
              5
            </Button>
            <Button handleClick={this.addToInput} id="six">
              6
            </Button>
            <Button handleClick={this.addToInput} id="multiply">
              *
            </Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} id="one">
              1
            </Button>
            <Button handleClick={this.addToInput} id="two">
              2
            </Button>
            <Button handleClick={this.addToInput} id="three">
              3
            </Button>
            <Button handleClick={this.addToInput} id="plus">
              +
            </Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleDecimal} id="decimal">
              .
            </Button>
            <Button handleClick={this.handleZero} id="zero">
              0
            </Button>
            <Button handleClick={this.handleEqual} id="equals">
              =
            </Button>
            <Button handleClick={this.addToInput} id="subtract">
              -
            </Button>
          </div>
          <div className="row">
            <ClearButton
              handleClear={() => {
                this.setState({ input: "0" });
              }}
              id="clear"
            >
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
