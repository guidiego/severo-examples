import { Model } from 'severus';

import * as action from '../actions/CounterAction';
import * as reaction from '../reactions/CounterReaction';

let state = {
    count: 0
};

export default Model.register('counter', state, reaction, action);