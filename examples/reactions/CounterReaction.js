export const increase = (state) => {
    return state.set('count', state.get('count') + 1);
}

export const decrease = (state) => {
    return state.set('count', state.get('count') - 1);
}