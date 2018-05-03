/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import Game from '../src/core/game';

import {
    // Typed implementations
    Flow, FlowWithPhases,

    // Interfaces
    FlowEvents, IFlow, IFlowReturn, IFlowWithPhases
} from '../src/core/flow';

import {
    // Typed implementations
    TurnOrder, Pass,

    // Interfaces
    DefaultTurnOrder, AnyTurnOrder, SkipTurnOrder, ITurnOrder
} from '../src/core/turn-order';

import {
    // Typed implementation
    PlayerView,

    // Interfaces
    IPlayerView
} from '../src/core/player-view';

// All interfaces from here on
import {
    // Random,
    RandomState
} from '../src/core/random';

import {
    // createGameReducer,
    CreateGameReducerInput
} from '../src/core/reducer';

export {
    // game
    Game,

    // flow
    Flow, FlowWithPhases,
    FlowEvents, IFlow, IFlowReturn, IFlowWithPhases,

    // turn-order
    TurnOrder, Pass,
    DefaultTurnOrder, AnyTurnOrder, SkipTurnOrder, ITurnOrder,

    // player-view
    PlayerView,
    IPlayerView,

    // random
    // Random,
    RandomState,

    // reducer
    CreateGameReducerInput

    /* TODO: all the rest.
     * This is endless, and I'm not even sure how to get rollup to play with TypeScript (or whether it might even work
     * in the end); I'd rather just distribute source files alongside declarations, without bundling into packages. */
};
