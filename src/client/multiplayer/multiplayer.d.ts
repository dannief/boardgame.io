// import { RestoreAction } from '../../core/action-creators';
import { ActionTypes } from '../../core/action-types';
import { Action, ActionSignatures } from '../../core/action-creators';

declare const blacklistedActions: Set<ActionTypes>;
export interface MultiplayerInput {
    socket: Socket,
    socketOpts: any,
    gameID: string,
    playerID: string|null,
    gameName: string,
    numPlayers: number,
    server: any,
}
export type SocketCallback = (arg0: any, arg1: any) => void;
export interface Socket {
    callbacks: { [type: string]: SocketCallback; }
    // FIXME: Can't figure this one out, looking at the tests. Here's my best guess:
    // emit: (actionType: ActionTypes, action: ActionSignatures, stateID: number, gameID: string, playerID: string|null) => Action;
    emit: (type: string, ...args: any[]) => Action;
    receive(type: string, ...args: any[]): void;
    on(type: string, callback: SocketCallback): void;
}
export class Multiplayer {
    constructor({
        socket,
        socketOpts,
        gameID,
        playerID,
        gameName,
        numPlayers,
        server,
    }: MultiplayerInput);
}