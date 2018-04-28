import { Context } from '../server';
import { Action, G } from './game';

export interface IPlayerView {
    STRIP_SECRETS(): (G: G, action: Action, ctx: Context) => G;
}
export const PlayerView: IPlayerView;