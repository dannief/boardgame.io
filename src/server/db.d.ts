import * as LRU from "lru-cache";
import { MongoClient, Db } from 'mongodb';
import { GameState } from '../core/game';

type Id = string;
type GamesMap = Map<Id, GameState>;

export class InMemory {
    public games: GamesMap;
    constructor();
    connect(): Promise<void>;
    set(id: Id, state: GameState): Promise<GamesMap>;
    get(id: Id): Promise<GameState|undefined>;
    has(id: Id): Promise<boolean>;
}
export interface MongoInput {
    url: string,
    dbname?: string,
    cacheSize?: number,
    mockClient?: MongoClient,
}
export class Mongo {
    public client: MongoClient;
    public url: string;
    public dbname: string;
    public cache: LRU;
    public db: Db;
    constructor({ url, dbname, cacheSize, mockClient }: MongoInput);
    connect(): Promise<void>;
    set(id: Id, state: GameState): Promise<GamesMap>;
    get(id: Id): Promise<GameState|undefined>;
    has(id: Id): Promise<boolean>;
}