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

// core.js doesn't explicitly import implementations for any of these.
import {
    // This implementation only ends up in the dist/core.js because Flow depends upon it
    // Random,
    RandomState
} from '../src/core/random';

import {
    // createGameReducer,
    CreateGameReducerInput
} from '../src/core/reducer';

import {
    // makeMove, gameEvent, restore, reset, undo, redo,
    GameArgsPayload, RestoreAction, MoveAction, Action, ActionSignatures
} from '../src/core/action-creators';

import {
    // MAKE_MOVE, GAME_EVENT, RESTORE, RESET, UNDO, REDO,
    ActionTypes, Move, ActionTypesKeyMap
} from '../src/core/action-types';

import {
    // Events
    Dispatch, Attachment, EventsDict
} from '../src/core/events';

export {
    /* game */
    Game,

    /* flow */
    Flow, FlowWithPhases,
    FlowEvents, IFlow, IFlowReturn, IFlowWithPhases,

    /* turn-order */
    TurnOrder, Pass,
    DefaultTurnOrder, AnyTurnOrder, SkipTurnOrder, ITurnOrder,

    /* player-view */
    PlayerView,
    IPlayerView,

    /* random */
    // Random,
    RandomState,

    /* reducer */
    // createGameReducer,
    CreateGameReducerInput,

    /* action-creators */
    // makeMove, gameEvent, restore, reset, undo, redo,
    GameArgsPayload, RestoreAction, MoveAction, Action, ActionSignatures,

    /* action-types */
    // MAKE_MOVE, GAME_EVENT, RESTORE, RESET, UNDO, REDO,
    ActionTypes, Move, ActionTypesKeyMap,

    /* events */
    // Events
    Dispatch, Attachment, EventsDict
};
