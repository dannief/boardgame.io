import { G } from './game';
import { Context } from '../server';

export const Pass: (G: G, ctx: Context)=> G;
export interface DefaultTurnOrder {
    first(G: G, ctx: Context): number;
    next(G: G, ctx: Context): number;
}
export interface AnyTurnOrder {
    first(): undefined;
    next(): undefined;
}
export interface SkipTurnOrder {
    first(G: G, ctx: Context): number;
    next(G: G, ctx: Context): number|void;
}
export interface ITurnOrder {
    DEFAULT: DefaultTurnOrder,
    ANY: AnyTurnOrder,
    SKIP: SkipTurnOrder
}
export const TurnOrder: ITurnOrder;