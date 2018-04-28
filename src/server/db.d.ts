type Id = string;
type State = any;
type GamesMap = Map<Id, State>;

export class InMemory {
    public games: GamesMap;
    constructor();
    connect(): Promise<void>;
    // FIXME: this.games calls set() and get() functions
    set(id: Id, state: State): Promise<GamesMap>;
    get(id: Id): Promise<State|undefined>;
    has(id: Id): Promise<boolean>;
}