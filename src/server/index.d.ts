export interface Context {
    _random?: any
}
export interface G {

}
export interface Flow {
    // Where G matches
    canMakeMove(G: G, ctx: Context): void;
}
export interface GameObj {
    name: string,
    flow: Flow,
    playerView(G: G, ctx: Context, playerID: string): G;
}
export interface ServerArgs {
    games: GameObj[],
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