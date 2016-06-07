import { Model } from 'severus';
import { List } from 'immutable';

import * as action from '../actions/ListAction';
import * as reaction from '../reactions/ListReaction';

let state = {
    tasks: List()
};

export default Model.register('todo-list', state, reaction, action);