export const addTask = (state, {value}) => {
    return state.set('tasks', state.get('tasks').push(value));
}

export const removeTask = (state, {value}) => {
    return state.set('tasks', state.get('tasks').filter(t => t !== value));
}