import React, { Component } from 'react'
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
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }

    render() {
        // creates a const with a new state array
        const {array} = this.state;

        return (
            // maps through the array and creates a new div with it and new value
            <>
             {array.map((value, idx) => (
                 <div className="array-bar" key={idx}>
                     {value}
                 </div>
             ))}
            </>
        )
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer
