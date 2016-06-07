import React from 'react';
import { Connector } from 'severus';


class Counter extends Connector('counter') {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="text-center card">
                <label> Counter Example </label>
                <h1> {this.state.count} </h1>
                <div className='btn-group'>
                    <button className="btn btn-default" onClick={this.action.increase}> Increase </button>
                    <button className="btn btn-default" onClick={this.action.decrease}> Decrease </button>
                </div>
            </div>
        )
    }
}

export default Counter;