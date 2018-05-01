import React, { ReactNode } from 'react';
import { State } from '../../core/game';
import { Store } from 'redux';
import { Events, EventsDict } from '../../core/events';
import { restore } from '../../core/action-creators';

export interface DebugMoveProps {
    name: string,
    shortcut: string,
    fn: () => any,
}
export interface DebugMoveState {
    error: string,
    focus?: boolean,
    enterArg?: boolean,
}
export class DebugMove extends React.Component<DebugMoveProps, DebugMoveState> {
    onSubmit(value: string): void;
}
export interface DebugMoveArgFieldProps {
    name: string,
    onSubmit: (value: string) => void,
    active?: boolean,
    activate?: (event: React.MouseEvent<HTMLDivElement>) => void,
    deactivate?: (event: React.FocusEvent<HTMLSpanElement>) => void,
}
export interface DebugMoveArgFieldState {
    // None presently
}
export class DebugMoveArgField extends React.Component<DebugMoveArgFieldProps, DebugMoveArgFieldState> {
    onSubmit(value: any): void;
}
export interface KeyboardShortcutProps {
    value: string,
    children?: ReactNode,
    onPress?: (event: React.MouseEvent<HTMLDivElement>) => void,
}
export interface KeyboardShortcutState {
    active: boolean
}
export class KeyboardShortcut extends React.Component<KeyboardShortcutProps, KeyboardShortcutState> {
    onSubmit(value: any): void;
    // The type of the element for the FocusEvent corresponds to that of the children
    deactivate(event: React.FocusEvent<HTMLElement>): void;
    activate(event: React.MouseEvent<HTMLElement>): void;
}
export interface DebugProps {
    gamestate: State,
    gameID: string,
    playerID?: string,
    moves?: any,
    events?: EventsDict,
    restore?: (gamestate: State) => void,
    showLog?: boolean,
    store?: Store<State>,
}
export interface DebugState {
    showDebugUI: boolean,
    showLog: boolean,
    help: boolean,
}
export class Debug extends React.Component<DebugProps, DebugState> {
    shortcuts: { [name: string]: string; };
    assignShortcuts(): void;
    saveState(event: React.MouseEvent<HTMLDivElement>): void;
    restoreState(event: React.MouseEvent<HTMLDivElement>): void;
    onClickMain(event: React.MouseEvent<HTMLDivElement>): void;
    onClickLog(event: React.MouseEvent<HTMLDivElement>): void;
    toggleHelp(event: React.MouseEvent<HTMLDivElement>): void;
}