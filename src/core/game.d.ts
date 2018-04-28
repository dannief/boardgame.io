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
export interface State {
    // User managed state.
    G: G,
    // Framework managed state.
    ctx: Context,
    // A list of actions performed so far. Used by the
    // GameLog to display a journal of moves.
    log: Action[], // TODO: double-check
    // List of {G, ctx} pairs that can be undone.
    _undo: { G: G, ctx: Context }[],
    // List of {G, ctx} pairs that can be redone.
    _redo: { G: G, ctx: Context }[],
    // A monotonically non-decreasing ID to ensure that
    // state updates are only allowed from clients that
    // are at the same version that the server.
    _stateID: number,

    // A snapshot of this object so that actions can be
    // replayed over it to view old snapshots.
    _initial: State, // TODO: double-check
}
export interface G {
    name: string,
    setup: any,
    playerView: any,
    flow: any,
    seed: string,
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