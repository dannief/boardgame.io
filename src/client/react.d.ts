import { Component } from 'react';
import { _ClientImpl } from './client';
import { ClientInput, WrappedBoardProps } from './react-native';

export interface DebuggableClientInput extends ClientInput {
    debug?: boolean,
}
export function Client({
    game,
    numPlayers,
    board,
    multiplayer,
    debug,
    enhancer,
}: DebuggableClientInput): WrappedBoard;
export interface DebuggableWrappedBoardProps extends WrappedBoardProps {
    debug?: boolean,
}
export interface WrappedBoardState {
    // None presently.
}
declare class WrappedBoard extends Component<DebuggableWrappedBoardProps, WrappedBoardState> {
    client: _ClientImpl;
}