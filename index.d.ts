/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
declare module 'boardgame.io/ui' {
    import React, {
        CSSProperties,
        DOMAttributes,
        HTMLAttributes,
        ReactElement,
        ReactNode,
    } from 'react';
    /* card */
    export interface ICardProps {
        back?: ReactNode,
        canHover?: boolean,
        className?: string,
        front?: ReactNode,
        isFaceUp?: boolean
    }
    export type ICardPropsCombined = ICardProps & HTMLAttributes<HTMLDivElement>;
    export const Card: (props: ICardPropsCombined, ...rest: any[]) => ReactElement<ICardPropsCombined>;
    export interface IDeckState {
        cards: ReactNode[]
    }
    /* deck */
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
    /* grid */
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
    /* hex */
    export interface IHexGridProps extends GenericGridProps {
        levels?: number
    }
    export type IHexGridPropsCombined = IHexGridProps & HTMLAttributes<SVGElement>;
    export class HexGrid extends React.Component<IHexGridPropsCombined, {}> {
        private _getCellColor(x: number, y: number, z: number): string;
        private _getGrid(): Hex[]|null;
        onClick(mouseEvent: React.MouseEvent<SVGGElement>): void;
        onMouseOver(mouseEvent: React.MouseEvent<SVGGElement>): void;
        onMouseOut(mouseEvent: React.MouseEvent<SVGGElement>): void;
    }
    export interface IHexProps extends GenericInteractiveProps<SVGGElement> {
        x?: number,
        y?: number,
        z?: number,
        size?: number,
        children: ReactNode // Doesn't accept an array.
    }
    export type IHexPropsCombined = IHexProps & HTMLAttributes<SVGGElement>;
    export class Hex extends React.Component<IHexPropsCombined, {}>{
        constructor(props: IHexPropsCombined);
        width(): number;
        height(): number;
        center(): { x: number, y: number };
        points(): string;
    }
    /* token */
    export interface ITokenProps extends GenericInteractiveProps<HTMLElement> {
        x: number;
        y: number;
        z?: number;
        template?: Square, // FIXME: Best guess.
        animate?: boolean,
        children?: ReactNode,
        style?: CSSProperties,
        // Strictly, the MouseEvent is of whatever element type Square is, but I have no idea.
        onClick?: (mouseEvent: React.MouseEvent<HTMLElement>) => void,
        onMouseOver?: (mouseEvent: React.MouseEvent<HTMLElement>) => void,
        onMouseOut?: (mouseEvent: React.MouseEvent<HTMLElement>) => void,
        animationDuration?: number
    }
    export type ITokenPropsCombined = ITokenProps & HTMLAttributes<HTMLElement>;
// I noticed that no state is initialised upon construction, so I guess these are all optional..?
    export interface ITokenState {
        x?: number,
        y?: number,
        z?: number,
        originTime?: number,
        originX?: number,
        originY?: number,
        originZ?: number,
    }
    export class Token extends React.Component<ITokenPropsCombined, ITokenState> {
        private _animate(now: number): void;
        getCoords(props?: ITokenProps): { x: number, y: number, z: number };
        private _easeInOutCubic(t: number, b: number, c: number, d: number): number;
    }
}
declare module 'boardgame.io/core' {
    import { Context } from 'boardgame.io/server';

    /* game */
    export interface GameState {
        G: G,
        ctx: Context,
        log: Action[],
        _undo: { G: G, ctx: Context }[],
        _redo: { G: G, ctx: Context }[],
        _stateID: number,
        _initial: GameState,
    }
    export interface FlowValue {
        endGameIf: (G: G, ctx: Context, playerID: string) => string,
        endTurnIf: (G: G, ctx: Context, playerID: string) => string,
        phases: Phase[]
    }
    export interface Phase {
        name: string,
        setup?: (G: G, ctx: Context) => G,
        cleanup?: (G: G, ctx: Context) => G,
    }
    export interface G {
        name: string,
        setup: (numPlayers: number) => G,
        playerView: (G: G, ctx: Context, playerID: string) => G,
        flow: FlowValue,
        seed: string,
        moveNames: (ActionTypes)[],
        // TODO: determine whether the MoveAction is likely to have args of type other than simply 'any'.
        processMove: (G: G, action: MoveAction<any>, ctx: Context) => G;
    }
    export interface GameArgs<T extends G> {
        name?: string,
        setup?: any,
        // moves: Pick<ActionTypesKeyMap, "MAKE_MOVE">,
        // moves?: Partial<ActionTypesKeyMap>,
        moves?: { [moveName: string]: Move<T> },
        playerView?: any,
        flow?: any,
        seed?: number,
    }
    export type GameArgsSpread = [string, any, any[], any, any, number];

    export default function Game<T extends G>({ name, setup, moves, playerView, flow, seed }: GameArgs<T>): T;


    /* flow */
    interface GAndCtx {
        G: G,
        ctx: Context
    }
    export interface FlowEvents {
        [event: string]: (gAndCtx: GAndCtx) => GAndCtx;
    }
    export interface IFlow {
        ctx?: Context,
        events?: FlowEvents,
        init?: GameState,
        processMove?: (state: GameState, action: Action, dispatch: Dispatch) => void,
        optimisticUpdate?: (G: G, ctx: Context, move: MoveAction<any>) => boolean,
        canMakeMove?: (G: G, ctx: Context, gameArgsPayload: GameArgsPayload<any>) => boolean,
        canUndoMove?: (G: G, ctx: Context, moveName: string) => boolean,
    }
    export interface IFlowReturn extends Pick<IFlow, "ctx"|"init"|"canUndoMove"|"processMove"|"optimisticUpdate"|"canMakeMove"> {
        eventNames: string[],
        processGameEvent?: (state: GameState, action: Action) => Dispatch,
    }
    export function Flow({
        ctx,
        events,
        init,
        processMove,
        optimisticUpdate,
        canMakeMove,
        canUndoMove,
    }: IFlow): IFlowReturn;
    export interface IFlowWithPhases {
        phases?: Phase[],
        movesPerTurn?: number|undefined, // Not always initialised in defaults init process.
        endTurnIf?: () => boolean,
        endGameIf?: () => boolean,
        onTurnBegin?: (G: G) => G,
        onTurnEnd?: (G: G) => G,
        onMove?: (G: G) => G,
        turnOrder?: DefaultTurnOrder,
        endTurn?: boolean,
        endPhase?: boolean|undefined, // Not always initialised in defaults init process.
        endGame?: boolean,
        undoableMoves?: string[]|null,
        allowedMoves?: string[]|null,
        optimisticUpdate?: () => boolean,
    }
    export function FlowWithPhases({
        phases,
        movesPerTurn,
        endTurnIf,
        endGameIf,
        onTurnBegin,
        onTurnEnd,
        onMove,
        turnOrder,
        endTurn,
        endPhase,
        endGame,
        undoableMoves,
        allowedMoves,
        optimisticUpdate
    }: IFlowWithPhases): IFlow;

    /* turn-order */
    export const Pass: (G: G, ctx: Context)=> G;
    export interface DefaultTurnOrder {
        first(G: G, ctx: Context): number;
        next(G: G, ctx: Context): number;
    }
    export interface AnyTurnOrder {
        first(): undefined;
        next(): undefined;
    }
    export interface SkipTurnOrder {
        first(G: G, ctx: Context): number;
        next(G: G, ctx: Context): number|void;
    }
    export interface ITurnOrder {
        DEFAULT: DefaultTurnOrder,
        ANY: AnyTurnOrder,
        SKIP: SkipTurnOrder
    }
    export const TurnOrder: ITurnOrder;

    /* player-view */
    export interface IPlayerView {
        STRIP_SECRETS(): (G: G, action: Action, ctx: Context) => G;
    }
    export const PlayerView: IPlayerView;

    /* random */
    export interface RandomState extends GameState {
        seed: string;
    }
    interface API {
        Die(spotvalue?: number, diceCount?: number): number|number[];
        Number(): number;
        Shuffle<T>(deck: T[]): T[];
    }
    export class Random {
        public state: RandomState;
        constructor(ctx: Context);
        public update(ctx: Context): Context;
        public attach(ctx: Context): Context;
        private _random(): number;
        private _api(): API;
        public static detach(ctx: Context): Context;
        public static seed(): string;
    }

    /* reducer */
    export interface CreateGameReducerInput {
        game: any,
        numPlayers: number,
        multiplayer: boolean,
    }
    export function createGameReducer({ game, numPlayers, multiplayer }: CreateGameReducerInput): (state: GameState, action: Action) => GameState;

    /* action-creators */
    export interface GameArgsPayload<Args> {
        type: string,
        args: Array<Args>,
        playerID: string,
    }
    export interface RestoreAction extends Action {
        state: GameState
    }
    export interface MoveAction<Args> extends Action {
        payload: GameArgsPayload<Args>
    }
    export interface Action {
        type: ActionTypes;
    }

    export const makeMove: <Args>(type: string, args: Array<Args>, playerID: string) => MoveAction<Args>;
    export const gameEvent: <Args>(type: string, args: Array<Args>, playerID: string) => MoveAction<Args>;
    export const restore: (state: GameState) => RestoreAction;
    export const reset: () => Action;
    export const undo: () => Action;
    export const redo: () => Action;
    export type ActionSignatures = typeof makeMove | typeof gameEvent | typeof restore | typeof reset | typeof undo | typeof redo;

    /* action-types */
    export const MAKE_MOVE: 'MAKE_MOVE';
    export const GAME_EVENT: 'GAME_EVENT';
    export const RESTORE: 'RESTORE';
    export const RESET: 'RESET';
    export const UNDO: 'UNDO';
    export const REDO: 'REDO';
    export type ActionTypes = 'MAKE_MOVE'|'GAME_EVENT'|'RESTORE'|'RESET'|'UNDO'|'REDO';

    export type Move<T extends G> = (...args: any[]) => T;
    export interface ActionTypesKeyMap {
        MAKE_MOVE: Move<G>;
        GAME_EVENT: Move<G>;
        RESTORE: (state: GameState) => G;
        RESET: () => G;
        UNDO: () => G;
        REDO: () => G;
    }

    /* events */
    export interface Dispatch {
        key: string,
        args: any[]
    }
    export interface Attachment {
        events: Events,
    }
    export interface EventsDict {
        [name: string]: Events;
    }
    export class Events {
        public flow: IFlow;
        public playerID: string;
        public dispatch: Dispatch[];
        constructor(flow: IFlow, playerID: string);
        attach(ctx: Context): Attachment;
        update(state: GameState): GameState;
        public static detach(ctx: Context): Attachment;
    }
}
declare module 'boardgame.io/react-native' {
    import React, { Component } from "react";
    import { G } from 'boardgame.io/core';
    import { _ClientImpl } from 'boardgame.io/client';
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
    class WrappedBoard extends Component<WrappedBoardProps, WrappedBoardState>{
        client: _ClientImpl;
    }
    // // https://github.com/Microsoft/TypeScript/issues/15449
    // declare global {
    //     namespace JSX {
    //         interface IntrinsicElements {
    //             // ClientTag: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | WrappedBoardProps
    //             ClientTag: WrappedBoardProps
    //         }
    //     }
    // }
}
declare module 'boardgame.io/react' {
    import React, { Component } from "react";
    import { WrappedBoardProps, ClientInput } from 'boardgame.io/react-native';
    import { G } from 'boardgame.io/core';
    import { _ClientImpl } from 'boardgame.io/client';
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
    class WrappedBoard extends Component<DebuggableWrappedBoardProps, WrappedBoardState> {
        client: _ClientImpl;
    }
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
