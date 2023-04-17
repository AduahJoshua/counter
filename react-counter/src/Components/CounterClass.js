import React, { Component } from 'react';

class CounterClass extends Component {
    constructor(){
        super()
        this.state= { count: 0};
    }
    
    handleIncrease = () => {
        this.setState({count: this.state.count + 2});
    }
    handleDecrease = () => {
        this.setState({count: this.state.count - 2});
    }
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>Count :{this.state.count}</h1>
                <button onClick={this.handleIncrease}>Increase Count</button>
                <button onClick={this.handleDecrease}>Decrease Count</button>
            </div>
        );
    }
}

export default CounterClass;
