import * as React from 'react';
import { Component, MouseEventHandler, ReactNode } from 'react';

export interface ITokenProps {
    x: number;
    y: number;
    z?: number;
    template: any,
    style?: any,
    animate: boolean,
    // TODO: re-assess parameters for these mouse events.
    onClick?: (coord: any, mouseEvent: MouseEventHandler<Token>) => void,
    onMouseOver?: (mouseEvent: MouseEventHandler<Token>) => void,
    onMouseOut?: (mouseEvent: MouseEventHandler<Token>) => void,
    children?: ReactNode[],
    animationDuration: number
}
// I noticed that no state is initialised upon construction, so I guess these are all optional..?
export interface ITokenState {
    x?: number,
    y?: number,
    z?: number,
    originTime?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
}
export class Token extends React.Component<ITokenProps, ITokenState> {
}
