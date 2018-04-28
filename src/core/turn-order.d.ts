import { G } from './game';
import { Context } from '../server';

export const Pass: (G: G, ctx: Context)=> G;
export const TurnOrder: {
    DEFAULT: {
        first(G: G, ctx: Context): number;
        next(G: G, ctx: Context): number;
    },
    ANY: {
        first(): undefined;
        next(): undefined;
    },
    SKIP: {
        first(G: G, ctx: Context): number;
        next(G: G, ctx: Context): number|void;
    }
};
