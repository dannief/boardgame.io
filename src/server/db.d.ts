import * as LRU from "lru-cache";
import { MongoClient, Db } from 'mongodb';

type Id = string;
type State = any;
type GamesMap = Map<Id, State>;

export class InMemory {
    public games: GamesMap;
    constructor();
    connect(): Promise<void>;
    set(id: Id, state: State): Promise<GamesMap>;
    get(id: Id): Promise<State|undefined>;
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
    set(id: Id, state: State): Promise<GamesMap>;
    get(id: Id): Promise<State|undefined>;
    has(id: Id): Promise<boolean>;
}