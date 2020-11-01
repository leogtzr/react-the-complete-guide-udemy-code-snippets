import React, { Component } from 'react';

function handleClick() {
    console.log('Ok...');
}

class Counter extends Component {

    state = {
        counter: 1
    };

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}

export default Counter;