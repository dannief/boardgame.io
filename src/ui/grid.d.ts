import * as React from 'react';
import { MouseEventHandler } from 'react';
import { CSSProperties } from 'react';
import { ReactNode } from 'react';

export interface IGridColorMap {
    [key: string]: string;
}
export interface IGridProps {
    rows: number,
    cols: number,
    outline?: boolean,
    style?: CSSProperties,
    colorMap?: IGridColorMap,
    cellSize?: number,
    onClick?: (mouseEvent: MouseEventHandler<ReactNode>) => void,
    onMouseOver?: (mouseEvent: MouseEventHandler<ReactNode>) => void,
    onMouseOut?: (mouseEvent: MouseEventHandler<ReactNode>) => void,
    children?: ReactNode[]|ReactNode
}
export class Grid extends React.Component<IGridProps, {}> {
}
export interface ISquareProps {
    x: number;
    y: number;
    size?: number,
    style?: CSSProperties,
    transform?: string,
    onClick?: (mouseEvent: MouseEventHandler<SVGGElement>) => void,
    onMouseOver?: (mouseEvent: MouseEventHandler<SVGGElement>) => void,
    onMouseOut?: (mouseEvent: MouseEventHandler<SVGGElement>) => void,
    children?: ReactNode
}
export class Square extends React.Component<ISquareProps, {}> {
}
