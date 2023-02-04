import React from "react";
import { mergeSort } from "../sorting-algorithms/mergeSort";

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
    for (let i = 0; i < 240; i++) {
      array.push(randomNumber(5, 690));
    }
    this.setState({ array });
  }

  mergeSort() {
    const sortedArraySetup = this.state.array.slice().sort((a, b) => a - b);
    const sortedArray = mergeSort(this.state.array);

    console.log(arraysAreEqual(sortedArraySetup, sortedArray));
  }

  render() {
    let { array } = this.state;
    return (
      <>
        <div className="container">
          {array.map((value, index) => (
            <div
              className="array-bar"
              key={index}
              style={{ height: `${value}px` }}
            ></div>
          ))}
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
        </div>
        <button className="generate-button" onClick={() => this.resetArray()}>
          Generate new Array
        </button>
      </>
    );
  }
}

function randomNumber(lowest, highest) {
  return Math.floor(Math.random() * (highest - lowest + 1) + lowest);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
}

export default Visualiser;
