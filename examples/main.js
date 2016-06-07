import React from 'react'
import ReactDOM from 'react-dom';

import Models from './models';

import Counter from './components/CounterComponent';
import List from './components/ListComponent';
import Compose from './components/ComposedComponent';

const app = document.getElementById('app');

const Examples = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-4">
                    <Counter />
                </div>
                
                <div className="col-xs-12 col-md-4">
                    <List />
                </div>
                
                <div className="col-xs-12 col-md-4">
                    <Compose />
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<Examples />, app);