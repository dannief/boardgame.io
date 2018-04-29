import { Context } from '../server';
import { Action, MoveAction } from './action-creators';
import { ActionTypes, ActionTypesKeyMap } from './action-types';

// TODO: double-check this type; unlikely to be completely correct.
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
export interface FlowValue {
    endGameIf: (G: G, ctx: Context, playerID: string) => string, // Guessing return type based on endTurnIf().
    endTurnIf: (G: G, ctx: Context, playerID: string) => string, // From docs, returns playerID: http://boardgame.io/#/turn-order,
    phases: Phase[]
}
export interface Phase {
    name: string,
    setup?: (G: G, ctx: Context) => G,
    cleanup?: (G: G, ctx: Context) => G,
}
export interface G {
    name: string,
    setup: (numPlayers: number) => G,
    playerView: (G: G, ctx: Context, playerID: string) => G,
    flow: FlowValue,
    seed: string,
    moveNames: (ActionTypes)[],
    // TODO: determine whether the MoveAction is likely to have args of type other than simply 'any'.
    processMove: (G: G, action: MoveAction<any>, ctx: Context) => G;
}
export interface GameArgs {
    name: string,
    setup: any,
    // moves: Pick<ActionTypesKeyMap, "MAKE_MOVE">,
    moves: Partial<ActionTypesKeyMap>,
    playerView: any,
    flow: any,
    seed: number,
}
export type GameArgsSpread = [string, any, any[], any, any, number];

export default function Game({ name, setup, moves, playerView, flow, seed }: GameArgs): G;