import { State } from './game';
import { ActionTypes } from './action-types';

// TODO: ascertain whether <Args> generic is needed, or whether GameArgsPayload takes a consistent Args
// Previously used GameArgsSpread type.
export interface GameArgsPayload<Args> {
    type: string,
    args: Array<Args>,
    playerID: string,
}
export interface RestoreAction extends Action {
    state: State
}
export interface MoveAction<Args> extends Action {
    payload: GameArgsPayload<Args>
}
export interface Action {
    type: ActionTypes;
}

export const makeMove: <Args>(type: string, args: Array<Args>, playerID: string) => MoveAction<Args>;
export const gameEvent: <Args>(type: string, args: Array<Args>, playerID: string) => MoveAction<Args>;
export const restore: (state: State) => RestoreAction;
export const reset: () => Action;
export const undo: () => Action;
export const redo: () => Action;
export type ActionSignatures = typeof makeMove | typeof gameEvent | typeof restore | typeof reset | typeof undo | typeof redo;