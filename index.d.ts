/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
import {
    Component,
    CSSProperties,
    DOMAttributes,
    HTMLAttributes,
    MouseEventHandler,
    ReactElement,
    ReactNode,
} from 'react';
import * as React from 'react';
import { GenericInteractiveProps, IGridColorMap, IGridProps, Square } from './src/ui/grid';
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
    export class HexGrid extends React.Component<IHexGridProps, {}> {
        private _getCellColor(x: number, y: number, z: number): string;
        private _getGrid(): Hex[]|null;
        onClick(mouseEvent: React.MouseEvent<Element>): void;
        onMouseOver(mouseEvent: React.MouseEvent<Element>): void;
        onMouseOut(mouseEvent: React.MouseEvent<Element>): void;
    }
    export interface IHexProps extends GenericInteractiveProps<SVGGElement> {
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
    export interface IGridColorMap {
        [key: string]: string;
    }
    export interface IGridProps extends GenericGridProps {
        rows: number,
        cols: number
    }
    export interface GenericGridProps extends GenericInteractiveProps<SVGElement> {
        outline?: boolean,
        colorMap?: IGridColorMap,
        cellSize?: number
    }
    export interface GenericInteractiveProps<T extends Element> {
        style?: CSSProperties,
        onClick?: (mouseEvent: React.MouseEvent<T>) => void,
        onMouseOver?: (mouseEvent: React.MouseEvent<T>) => void,
        onMouseOut?: (mouseEvent: React.MouseEvent<T>) => void,
        children?: ReactNode[]|ReactNode,
    }
    export type IGridPropsCombined = IGridProps & HTMLAttributes<SVGElement>;
    export class Grid extends React.Component<IGridPropsCombined, {}> {
        private _getCellColor(x: number, y: number): string;
        private _getGrid(): Square[]|null;
        onClick(mouseEvent: React.MouseEvent<SVGElement>): void;
        onMouseOver(mouseEvent: React.MouseEvent<SVGElement>): void;
        onMouseOut(mouseEvent: React.MouseEvent<SVGElement>): void;
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
    export type ISquarePropsCombined = ISquareProps & HTMLAttributes<SVGGElement>;
    export class Square extends React.Component<ISquarePropsCombined, {}> {
        onClick(mouseEvent: React.MouseEvent<Element>): void;
        onMouseOver(mouseEvent: React.MouseEvent<Element>): void;
        onMouseOut(mouseEvent: React.MouseEvent<Element>): void;
    }

    export interface IDeckState {
        cards: ReactNode[]
    }
    export interface IDeckProps {
        cards?: ReactElement<ICardPropsCombined>[],
        className?: string,
        onClick?(mouseEvent?: React.MouseEvent<HTMLDivElement>): void,
        splayWidth?: number,
    }
    export type IDeckPropsCombined = IDeckProps & HTMLAttributes<HTMLDivElement>;
    export class Deck extends React.Component<IDeckPropsCombined, IDeckState>{
        constructor(props: IDeckPropsCombined);
    }
    export interface ICardProps {
        back?: ReactNode,
        canHover?: boolean,
        className?: string,
        front?: ReactNode,
        isFaceUp?: boolean
    }
    export type ICardPropsCombined = ICardProps & DOMAttributes<HTMLDivElement>;
    export const Card: (props: ICardPropsCombined, ...rest: any[]) => ReactElement<ICardPropsCombined>;
    export interface ILogoProps {
        width: string,
        height: string
    }
    export const Logo: (props: ILogoProps) => ReactElement<ILogoProps>;
    // FIXME: Not sure how to deal with default exports in this (single-file declaration) context.
    // export default Logo;
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