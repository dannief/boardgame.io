/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
import { Component, CSSProperties, MouseEventHandler, ReactNode } from 'react';
import * as React from 'react';
import { IGridColorMap, IGridProps, Square } from './src/ui/grid';
import { IHexGridProps } from './src/ui/hex';
import { ITokenProps, ITokenState } from './src/ui/token';

declare module 'boardgame.io/ui' {
    import * as React from 'react';
    import { Component, ReactNode } from 'react';
    export interface ITokenProps extends GenericInteractiveProps {
        x: number;
        y: number;
        z?: number;
        template?: Square, // FIXME: Best guess.
        animate: boolean,
        children?: ReactNode[],
        style?: CSSProperties,
        // Strictly, the MouseEvent is of whatever element type Square is, but I have no idea.
        onClick?: (mouseEvent: React.MouseEvent<Element>) => void,
        onMouseOver?: (mouseEvent: React.MouseEvent<Element>) => void,
        onMouseOut?: (mouseEvent: React.MouseEvent<Element>) => void,
        animationDuration?: number
    }
    export interface ITokenState {
        x?: number,
        y?: number,
        z?: number,
        originTime?: number,
        originX?: number,
        originY?: number,
        originZ?: number,
    }
    export class Token extends React.Component<ITokenProps, ITokenState> {
        private _animate(now: number): void;
        getCoords(props?: ITokenProps): { x: number, y: number, z: number };
        private _easeInOutCubic(t: number, b: number, c: number, d: number): number;
    }
    export interface IGridColorMap {
        [key: string]: string;
    }
    export interface IGridProps extends GenericGridProps {
        rows: number,
        cols: number,
    }
    export interface GenericInteractiveProps {
        style?: CSSProperties,
        onClick?: (mouseEvent: React.MouseEvent<Element>) => void,
        onMouseOver?: (mouseEvent: React.MouseEvent<Element>) => void,
        onMouseOut?: (mouseEvent: React.MouseEvent<Element>) => void,
        children?: ReactNode[]|ReactNode,
    }
    export interface GenericGridProps extends GenericInteractiveProps {
        outline?: boolean,
        colorMap?: IGridColorMap,
        cellSize?: number
    }
    export class Grid extends React.Component<IGridProps, {}> {
        private _getCellColor(x: number, y: number): string;
        private _getGrid(): Square[]|null;
        onClick(mouseEvent: React.MouseEvent<Element>): void;
        onMouseOver(mouseEvent: React.MouseEvent<Element>): void;
        onMouseOut(mouseEvent: React.MouseEvent<Element>): void;
    }
    export class HexGrid extends React.Component<IHexGridProps, {}> {
        private _getCellColor(x: number, y: number, z: number): string;
        private _getGrid(): Hex[]|null;
        onClick(mouseEvent: React.MouseEvent<Element>): void;
        onMouseOver(mouseEvent: React.MouseEvent<Element>): void;
        onMouseOut(mouseEvent: React.MouseEvent<Element>): void;
    }
    export interface IHexProps extends GenericInteractiveProps {
        x?: number,
        y?: number,
        z?: number,
        size?: number,
        children: ReactNode // Doesn't accept an array.
    }
    export class Hex extends React.Component<IHexProps, {}>{
        constructor(props: IHexProps);
        width(): number;
        height(): number;
        center(): { x: number, y: number };
        points(): string;
    }
    export interface ISquareProps {
        x: number;
        y: number;
        size?: number,
        style?: CSSProperties,
        transform?: string,
        onClick?: (mouseEvent: React.MouseEvent<SVGGElement>) => void,
        onMouseOver?: (mouseEvent: React.MouseEvent<SVGGElement>) => void,
        onMouseOut?: (mouseEvent: React.MouseEvent<SVGGElement>) => void,
        children?: ReactNode
    }
    export class Square extends React.Component<ISquareProps, {}> {
        onClick(mouseEvent: React.MouseEvent<Element>): void;
        onMouseOver(mouseEvent: React.MouseEvent<Element>): void;
        onMouseOut(mouseEvent: React.MouseEvent<Element>): void;
    }
    export interface IDeckState {
        cards: ReactNode[]
    }
    export interface IDeckProps {
        cards?: ReactNode[],
        className?: string,
        onClick(mouseEvent?: React.MouseEvent<Element>): void,
        splayWidth?: number,
    }
    export class Deck extends React.Component<IDeckProps, IDeckState>{
        constructor(props: IDeckProps);
    }
    export interface ICardState {
        cards: ReactNode[]
    }
    export interface ICardProps {
        back: ReactNode,
        canHover: boolean,
        className: string,
        front: ReactNode,
        isFaceUp: boolean,
    }
    // Strictly, it returns a <div>, but I don't know how to specify that.
    export function Card ({ back, canHover, className, front, isFaceUp, ...rest }: ICardProps): ReactNode;
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