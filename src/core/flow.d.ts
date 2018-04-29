import { G, Phase, State } from './game';
import { Context } from '../server';
import { Dispatch } from './events';
import { Action, GameArgsPayload, MoveAction } from './action-creators';
import { DefaultTurnOrder } from './turn-order';

// canPlayerMakeMove(G: G, ctx: Context, opts?: { playerID?: string|null }): boolean;
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
    init?: State,
    processMove?: (state: State, action: Action, dispatch: Dispatch) => void,
    optimisticUpdate?: (G: G, ctx: Context, move: MoveAction<any>) => boolean,
    canMakeMove?: (G: G, ctx: Context, gameArgsPayload: GameArgsPayload<any>) => boolean,
    canUndoMove?: (G: G, ctx: Context, moveName: string) => boolean,
}
export interface IFlowReturn extends Pick<IFlow, "ctx"|"init"|"canUndoMove"|"processMove"|"optimisticUpdate"|"canMakeMove"> {
    eventNames: string[],
    processGameEvent?: (state: State, action: Action) => Dispatch,
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