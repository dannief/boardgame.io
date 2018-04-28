import { Action, State } from './game';
export interface CreateGameReducerInput {
    game: any,
    numPlayers: number,
    multiplayer: boolean,
}
export function createGameReducer({ game, numPlayers, multiplayer }: CreateGameReducerInput): (state: State, action: Action) => State;