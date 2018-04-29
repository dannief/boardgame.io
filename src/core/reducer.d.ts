import { State } from './game';
import { Action } from './action-creators';
export interface CreateGameReducerInput {
    game: any,
    numPlayers: number,
    multiplayer: boolean,
}
export function createGameReducer({ game, numPlayers, multiplayer }: CreateGameReducerInput): (state: State, action: Action) => State;