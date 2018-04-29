import { Context } from '../server';
import { G } from './game';
import { Action } from './action-creators';

export interface IPlayerView {
    STRIP_SECRETS(): (G: G, action: Action, ctx: Context) => G;
}
export const PlayerView: IPlayerView;