import { G, State } from './game';

export const MAKE_MOVE: 'MAKE_MOVE';
export const GAME_EVENT: 'GAME_EVENT';
export const RESTORE: 'RESTORE';
export const RESET: 'RESET';
export const UNDO: 'UNDO';
export const REDO: 'REDO';
export type ActionTypes = 'MAKE_MOVE'|'GAME_EVENT'|'RESTORE'|'RESET'|'UNDO'|'REDO';

export interface ActionTypesKeyMap {
    // TODO: review types for args to be accepted by MAKE_MOVE and GAME_EVENT.
    MAKE_MOVE: (...args: any[]) => G;
    GAME_EVENT: (...args: any[]) => G;
    RESTORE: (state: State) => G;
    RESET: () => G;
    UNDO: () => G;
    REDO: () => G;
}