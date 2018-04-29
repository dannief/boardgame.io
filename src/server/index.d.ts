import { G } from '../core/game';
import { IFlow } from '../core/flow';

export interface Context {
    _random?: any
}
export interface Game {
    name: string,
    flow: IFlow,
    playerView(G: G, ctx: Context, playerID: number|string): G;
}
export interface ServerArgs {
    games: Game[],
    db: any,
    _clientInfo: any,
    _roomInfo: any
}
export interface ServerReturn {
    app: any,
    db: any,
    run(): (port: number, callback: ()=>void) => Promise<void>;
}
export function Server({ games, db, _clientInfo, _roomInfo }: ServerArgs): ServerReturn;