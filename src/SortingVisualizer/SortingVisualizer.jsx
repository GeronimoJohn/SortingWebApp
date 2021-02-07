import React, { Component } from 'react';
import {getMergeSortAnimations} from '../algorithms/sortingAlgorithms'
import './SortingVisualizer.css'

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

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
        for (let i = 0; i < 150; i++) {
            array.push(randomIntFromInterval(5, 850));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
            } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort() {
        // const javascriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
        // const sortedArray = sortingAlgorithms.bubbleSort(this.state.array);
        // console.log(`Bubble Sort: ${sortedArray}`);

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
