import React, { Component } from 'react';
import * as sortingAlgorithms from '../algorithms/sortingAlgorithms'
import './SortingVisualizer.css'


export class SortingVisualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: []
        };
    }

    componentDidMount() {
        // We call the resetArray method when the component mounts
        this.resetArray();
    }

    // when the component mounts a new array with 100 random values is created
    resetArray() {
        const array = [];
        for (let i = 0; i < 5; i++) {
            array.push(randomIntFromInterval(5, 850));
        }
        this.setState({array});
    }

    mergeSort() {
        const javascriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
        console.log(`MergeSort: ${sortedArray}`);
    }

    bubbleSort() {
        const javascriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
        const sortedArray = sortingAlgorithms.bubbleSort(this.state.array);
        console.log(`Bubble Sort: ${sortedArray}`);
    }

    quickSort() {

    }

    render() {
        // creates a const with a new state array
        const {array} = this.state;

        return (
            // maps through the array and creates a new div with it and new value
            <div className="array-container">
                {console.log(this.state.array)}
            {array.map((value, idx) => (
                <div 
                className="array-bar" 
                key={idx}
                style={{height: `${value}px`}}
                >
                </div>
             ))}
             <button onClick={() => this.resetArray()}>Generate a new array</button>
             <button onClick={() => this.mergeSort()}>Merge Sort</button>
             <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
             <button onClick={() => this.quickSort()}>Quick Sort</button>
            </div>
        )
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual (arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}

export default SortingVisualizer
