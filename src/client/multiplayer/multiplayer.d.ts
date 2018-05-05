import { ActionTypes } from '../../core/action-types';
import { Store } from 'redux';
import io from 'socket.io-client';
// import { Action, ActionSignatures } from '../../core/action-creators';

declare const blacklistedActions: Set<ActionTypes>;
export interface MultiplayerInput {
    socket: SocketIOClient.Socket|MockSocket,
    socketOpts?: SocketIOClient.ConnectOpts,
    gameID: string,
    playerID: string|null,
    gameName: string,
    numPlayers: number,
    server: string,
}
export type SocketEvents = "action"|"sync"|"connect"|"disconnect";
export type SocketCallback = (arg0: any, arg1: any) => void;
export interface MockSocket {
    callbacks: { [type: string]: SocketCallback; }
    // Can't figure this one out, looking at the tests - but it's only a mock, anyway. Here's my best guess:
    // emit: (actionType: ActionTypes, action: ActionSignatures, stateID: number, gameID: string, playerID: string|null) => any;
    emit(type: string, ...args: any[]): any;
    receive(type: string, ...args: any[]): void;
    on(event: string, fn: Function): SocketIOClient.Emitter;
}
export class Multiplayer {
    socket?: SocketIOClient.Socket|MockSocket;
    readonly socketOpts?: SocketIOClient.ConnectOpts;
    gameID: string;
    playerID: string|null;
    readonly gameName: string;
    readonly numPlayers: number;
    readonly server: string;
    callback: () => any;
    store: Store<any>|null;
    constructor({
        socket,
        socketOpts,
        gameID,
        playerID,
        gameName,
        numPlayers,
        server,
    }: MultiplayerInput);
    createStore(reducer: any, enhancer?: any): Store<any>;
    connect(): void;
    subscribe(fn: () => any): void;
    updateGameID(id: string): void;
    updatePlayerID(id: string): void;
}