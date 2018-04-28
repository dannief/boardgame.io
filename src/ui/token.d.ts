import * as React from 'react';
import { Component, HTMLAttributes, ReactNode } from 'react';
import { CSSProperties } from 'react';
import { GenericInteractiveProps, Square } from './grid';

export interface ITokenProps extends GenericInteractiveProps<HTMLElement> {
    x: number;
    y: number;
    z?: number;
    template?: Square, // FIXME: Best guess.
    animate?: boolean,
    children?: ReactNode,
    style?: CSSProperties,
    // Strictly, the MouseEvent is of whatever element type Square is, but I have no idea.
    onClick?: (mouseEvent: React.MouseEvent<HTMLElement>) => void,
    onMouseOver?: (mouseEvent: React.MouseEvent<HTMLElement>) => void,
    onMouseOut?: (mouseEvent: React.MouseEvent<HTMLElement>) => void,
    animationDuration?: number
}
export type ITokenPropsCombined = ITokenProps & HTMLAttributes<HTMLElement>;
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
export class Token extends React.Component<ITokenPropsCombined, ITokenState> {
    private _animate(now: number): void;
    getCoords(props?: ITokenProps): { x: number, y: number, z: number };
    private _easeInOutCubic(t: number, b: number, c: number, d: number): number;
}