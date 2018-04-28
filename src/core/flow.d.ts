import { G } from './game';
import { Context } from '../server';

export interface Flow {
    // Where G matches
    canMakeMove(G: G, ctx: Context): void;
}