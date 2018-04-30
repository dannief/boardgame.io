import { Store } from 'redux';
import { State } from '../core/game';
import { Game } from '../server';

export interface Dispatchers {
    [name: string]: (...args: any[]) => void;
}

export interface ClientState extends State {
    isActive: boolean,
    isConnected?: boolean
}
export function createEventDispatchers(eventNames: string[], store: Store<ClientState>, playerID: string): Dispatchers;
export function createMoveDispatchers(moveNames: string[], store: Store<ClientState>, playerID: string): Dispatchers;
export interface ClientInput {
    game: Game,
    numPlayers: number,
    multiplayer: boolean,
    socketOpts: any,
    gameID: string,
    playerID: string,
    enhancer: any,
}
declare class _ClientImpl {
    readonly game: Game;
    playerID?: string;
    moves: Dispatchers;
    events: Dispatchers;
    gameID?: string;
    readonly store: Store<ClientState>;

    constructor({
        game,
        numPlayers,
        multiplayer,
        socketOpts,
        gameID,
        playerID,
        enhancer,
    }: ClientInput);

    subscribe(fn: () => any): void;
    getState(): ClientState;
    connect(): void;
    createDispatchers(): void;
}
export function Client(opts: ClientInput): _ClientImpl;