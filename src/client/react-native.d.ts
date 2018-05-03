import { Component, DetailedHTMLProps, HTMLAttributes } from 'react';
import { _ClientImpl } from './client';
import { G } from '../core/game';

export interface ClientInput<T extends G> {
    game: T,
    numPlayers?: number,
    board: any,
    multiplayer?: boolean|{ server: string },
    debug?: boolean,
    enhancer?: any,
}
export function Client<T extends G>({
    game,
    numPlayers,
    board,
    multiplayer,
    enhancer,
}: ClientInput<T>): WrappedBoard;
export interface WrappedBoardProps {
    gameID?: string,
    playerID?: string|null,
}
export interface WrappedBoardState {
    // None presently.
}
declare class WrappedBoard extends Component<WrappedBoardProps, WrappedBoardState>{
    client: _ClientImpl;
}
// https://github.com/Microsoft/TypeScript/issues/15449
declare global {
    namespace JSX {
        interface IntrinsicElements {
            // ClientTag: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | WrappedBoardProps
            ClientTag: WrappedBoardProps
        }
    }
}