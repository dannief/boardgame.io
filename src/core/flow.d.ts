import { G } from './game';
import { Context } from '../server';

export interface Flow {
    canMakeMove(G: G, ctx: Context): void;
}