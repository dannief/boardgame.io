import { GameState } from './game';
import { Action } from './action-creators';
export interface CreateGameReducerInput {
    game: any,
    numPlayers: number,
    multiplayer: boolean,
}
export function createGameReducer({ game, numPlayers, multiplayer }: CreateGameReducerInput): (state: GameState, action: Action) => GameState;