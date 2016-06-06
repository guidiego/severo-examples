import { Dispatch } from 'severo';

export const addTask = (value) => Dispatch('ADD_TASK', {value});

export const removeTask = (value) => Dispatch('REMOVE_TASK', {value});