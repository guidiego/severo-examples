import { Dispatch } from 'severo';

export const increase = () => Dispatch('INCREASE', {});

export const decrease = () => Dispatch('DECREASE', {});