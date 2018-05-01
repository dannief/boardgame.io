import React from 'react';

export interface GameLogProps {
    store: any;
}
export interface GameLogState {
    // None presently.
}
export class GameLog extends React.Component<GameLogProps, GameLogState> {
    onRewind(logIndex: number|null): void;
}