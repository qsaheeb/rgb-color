import React from "react";
import Card from "./components/card.jsx";
import "./App.css";
import "./components/button.scss";

class Color extends React.Component {
  render() {
    let style = {
      backgroundColor: this.props.hexCode,
    };
    return (
      <Card className="color" style={style} hexCode={this.props.hexCode}></Card>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colorsNum: 10,
      colors: [],
    };
    for (let i = 0; i < this.state.colorsNum; i += 1) {
      this.state.colors.push({ hexCode: this.generateColor() });
    }

    this.updateColor = this.updateColor.bind(this);
  }

  generateColor() {
    return "#" + Math.random().toString(16).substr(-6);
  }

  updateColor() {
    let colors = [];
    for (let i = 0; i < this.state.colorsNum; i += 1) {
      colors.push({ hexCode: "#" + Math.random().toString(16).substr(-6) });
    }
    this.setState({
      colors: colors,
    });
  }

  render() {
    return (
      <>
        <button className="btn" onClick={this.updateColor.bind()}>
          Generate New Colors
        </button>
        <div className="color-container">
          {this.state.colors.map((color, index) => (
            <Color
              key={`color-${index}`}
              index={index}
              hexCode={color.hexCode}
            ></Color>
          ))}
        </div>
      </>
    );
  }
}

export default App;
