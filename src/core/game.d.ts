import { Context } from '../server';

export interface Moves {
    // TODO: double-check this type; unlikely to be correct.
    [actionType: string]: (...args: GameArgsSpread[])=>G;
}
export interface Action {
    type: string,
    playerID: string,
    // TODO: double-check this type; unlikely to be correct.
    args: GameArgsSpread // GameArgs spread
}
export interface G {
    name: string,
    setup: any,
    playerView: any,
    flow: any,
    seed: number,
    moveNames: string[],
    processMove: (G: G, action: Action, ctx: Context) => G;
}
export interface GameArgs {
    name: string,
    setup: any,
    moves: Moves,
    playerView: any,
    flow: any,
    seed: number,
}
export type GameArgsSpread = [string, any, any[], any, any, number];

export default function Game({ name, setup, moves, playerView, flow, seed }: GameArgs): G;