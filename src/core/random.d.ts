import { Context } from '../server';

export interface RandomState {
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