import { IFlow } from './flow';
import { Context } from '../server';
import { State } from './game';

// TODO: review this typing
export interface Dispatch {
    key: string,
    args: any[]
}
// TODO: review this typing
export interface Attachment {
    events: Events,
    // ...ctx
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
    update(state: State): State;
    public static detach(ctx: Context): Attachment;
}