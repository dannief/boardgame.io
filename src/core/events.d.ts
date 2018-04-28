import { Flow } from './flow';
import { Context } from '../server';

type State = any;
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
export class Events {
    public flow: Flow;
    public playerID: string;
    public dispatch: Dispatch[];
    constructor(flow: Flow, playerID: string);
    attach(ctx: Context): Attachment;
    update(state: State): State;
    public static detach(ctx: Context): Attachment;
}