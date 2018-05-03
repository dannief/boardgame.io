import { Component } from 'react';
import { _ClientImpl } from './client';
import { ClientInput, WrappedBoardProps } from './react-native';
import { G } from '../core/game';

export interface DebuggableClientInput<T extends G> extends ClientInput<T> {
    debug?: boolean,
}
export function Client<T extends G>({
    game,
    numPlayers,
    board,
    multiplayer,
    debug,
    enhancer,
}: DebuggableClientInput<T>): WrappedBoard;
export interface DebuggableWrappedBoardProps extends WrappedBoardProps {
    debug?: boolean,
}
export interface WrappedBoardState {
    // None presently.
}
declare class WrappedBoard extends Component<DebuggableWrappedBoardProps, WrappedBoardState> {
    client: _ClientImpl;
}