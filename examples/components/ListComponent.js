import React, { Component } from 'react';
import { Connector } from 'severo';
import uId from 'uid';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this._onSubmit = this._onSubmit.bind(this);
        this._onChange = this._onChange.bind(this);
    }
    
    _onChange(e) {
        this.setState({value: e.target.value});
    }
    
    _onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({value: ''});
    }
    
    render() {
        return (
            <form onSubmit={this._onSubmit}>
                <input value={this.state.value} onChange={this._onChange} className='form-control' />
            </form>
        )
    }
}

const ListItem = ({task, onClick}) => {
    const removeTask = () => onClick(task);
    return (<li className='list-group-item' onClick={removeTask} style={{cursor: 'pointer'}}>{task}</li>);
}

class TodoList extends Connector('todo-list') {
    constructor(props) {
        super(props);
    }
    
    removeTask(t) {
        this.action.removeTask()
    }
    
    render() {
        const list = this.state.tasks.map((task) => <ListItem key={uId()} task={task} onClick={this.action.removeTask} /> );
        
        return (
            <div className="text-center card">
                <label> Todo List Example </label>
                <Input onSubmit={this.action.addTask}/>
                <ul className='list-group' style={{marginTop: 10}}>
                    {list}
                </ul>
            </div>
        )
    }
}

export default TodoList;