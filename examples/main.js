import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Store, Action, Dispatch } from 'severo';

console.log(Dispatch);

Store.register('example', {
    state: {
        count: 0
    },
    
    increase: function() { 
        this.state.count++; 
    },
    
    decrease: function() { 
        this.state.count--;
    }
});

Action.register('example', {
    increase: () => Dispatch('INCREASE', {}),
    decrease: () => Dispatch('DECREASE', {})
});

class MyComponent extends Component('example') {
    constructor(props) {
        super();
    }
    
    render() {
        return (
            <div> 
                <h1> {this.state.count} </h1>
                <button onClick={this.increase}> Increase </button>
                <button onClick={this.decrease}> Decrease </button>
            </div>
        )
    }
}

const app = document.getElementById('app');

ReactDOM.render(<MyComponent />, app);