import React from "react";

class Visualiser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    let array = [];
    for (let i = 0; i < 210; i++) {
      array.push(randomNumber(5, 680));
    }
    this.setState({ array });
  }

  render() {
    let { array } = this.state;
    return (
      <>
        <div className="container">
          {/* <h1>Visualiser</h1> */}
          {array.map((value, index) => (
            <div
              className="array-bar"
              key={index}
              style={{ height: `${value}px` }}
            ></div>
          ))}
          <button onClick={() => this.resetArray()}>Generate new Array</button>
        </div>
      </>
    );
  }
}

function randomNumber(lowest, highest) {
  return Math.floor(Math.random() * (highest - lowest + 1) + lowest);
}

export default Visualiser;
