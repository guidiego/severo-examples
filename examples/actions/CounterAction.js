import { Dispatch } from 'severus';

export const increase = () => Dispatch('INCREASE');

export const decrease = () => Dispatch('DECREASE');