import { G, GameState } from './game';

export const MAKE_MOVE: 'MAKE_MOVE';
export const GAME_EVENT: 'GAME_EVENT';
export const RESTORE: 'RESTORE';
export const RESET: 'RESET';
export const UNDO: 'UNDO';
export const REDO: 'REDO';
export type ActionTypes = 'MAKE_MOVE'|'GAME_EVENT'|'RESTORE'|'RESET'|'UNDO'|'REDO';

export type Move<T extends G> = (...args: any[]) => T;
export interface ActionTypesKeyMap {
    // TODO: review types for args to be accepted by MAKE_MOVE and GAME_EVENT.
    MAKE_MOVE: Move<G>;
    GAME_EVENT: Move<G>;
    RESTORE: (state: GameState) => G;
    RESET: () => G;
    UNDO: () => G;
    REDO: () => G;
}