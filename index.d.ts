/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
import { Component, MouseEventHandler, ReactNode } from 'react';

declare module 'boardgame.io/ui' {
    import * as React from 'react';
    import { Component, ReactNode } from 'react';
    export interface ITokenProps {
        x: number;
        y: number;
        z?: number;
        template: any,
        style?: any,
        animate: boolean,
        // TODO: re-assess parameters for these mouse events.
        onClick?: (coord: any, mouseEvent: MouseEventHandler<Token>) => void,
        onMouseOver?: (mouseEvent: MouseEventHandler<Token>) => void,
        onMouseOut?: (mouseEvent: MouseEventHandler<Token>) => void,
        children?: ReactNode[],
        animationDuration: number
    }
    export class Token extends React.Component<ITokenProps, any> {
    }
    interface IGridColorMap {
        [key: string]: string;
    }
    interface IGridProps {
        rows: number;
        cols: number;
        outline?: boolean;
        style?: React.CSSProperties;
        colorMap?: IGridColorMap;
        cellSize?: number;
        onClick: (coords: any) => void;
        children?: any;
    }
    export class Grid extends React.Component<IGridProps, any> {
    }
    declare module 'boardgame.io/core' {
    export class FlowObj {
        ctx: (players: number) => any;
        processGameEvent: (state: any, gameEvent: any) => any;
    }
    export class GameObj {
        processMove: (G: any, action: any, ctx: any) => any;
        flow: FlowObj;
    }
    interface IGameCtx {
        numPlayer: number;
        turn: number;
        currentPlayer: string;
        currentPlayerMoves: number;
    }
    interface IGameMoves {
        [key:  string]: (G: any, ctx: IGameCtx, ...args: any[]) => any;
    }
    interface IGameFlowPhase {
        name: string;
        allowedMoves: string[];
        endPhaseIf: (G: any, ctx: IGameCtx) => boolean;
    }
    interface IGameFlowTrigger {
        conditon: (G: any, ctx: IGameCtx) => boolean;
        action: (G: any, ctx: IGameCtx) => any;
    }
    interface IGameFlow {
        movesPerTurn?: number;
        endGameIf: (G: any, ctx: IGameCtx) => any;
        endTurnIf?: (G: any, ctx: IGameCtx) => boolean;
        onTurnEnd?: (G: any, ctx: IGameCtx) => void;
        triggers?: IGameFlowTrigger[];
        phases?: IGameFlowPhase[];
    }
    interface IGameArgs {
        name?: string;
        setup: (numPlayers: number) => any;
        moves: IGameMoves;
        playerView?: (G: any, ctx: IGameCtx, playerID: string) => any;
        flow: IGameFlow;
    }
    export function Game (gameArgs: IGameArgs): GameObj;
}

declare module 'boardgame.io/react' {
    import { GameObj } from 'boardgame.io/core';
    export class WrapperBoard {
    }
    interface IClientArgs {
        game: GameObj;
        numPlayer?: number;
        board: React.ReactNode;
        multiplayer?: boolean;
        debug?: boolean;
    }
    export function Client (clientArgs: IClientArgs): WrapperBoard;
}

declare module 'boardgame.io/server' {
    import { GameObj } from 'boardgame.io/core';
    import * as Koa from 'koa';
    interface IServerArgs {
        games: GameObj[]
    }
    function Server(serverArgs: IServerArgs): Koa;
    export = Server;
}