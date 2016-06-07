import React from 'react';
import { Compose } from 'severus';


class ComposedComponent extends Compose('todo-list', 'counter') {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="text-center card">
                <label> Compose Example </label>
                <h1> {this.state.count * this.state.tasks.length} </h1>
            </div>
        )
    }
}

export default ComposedComponent;