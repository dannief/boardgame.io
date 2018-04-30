import { Component } from 'react';
import { Game } from '../server';
import { _ClientImpl } from './client';

export interface ClientInput {
    game: Game,
    numPlayers: number,
    board: any,
    multiplayer: boolean|{ server: string },
    debug?: boolean,
    enhancer: any,
}
export function Client({
    game,
    numPlayers,
    board,
    multiplayer,
    enhancer,
}: ClientInput): WrappedBoard;
export interface WrappedBoardProps {
    gameID?: string,
    playerID?: string|null,
}
export interface WrappedBoardState {
    // None presently.
}
declare class WrappedBoard extends Component<WrappedBoardProps, WrappedBoardState> {
    client: _ClientImpl;
}