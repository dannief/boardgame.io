import * as React from 'react';
import { CSSProperties } from 'react';
import { ReactNode } from 'react';

export interface IGridColorMap {
    [key: string]: string;
}
export interface IGridProps extends GenericGridProps {
    rows: number,
    cols: number,
}
export interface GenericInteractiveProps {
    style?: CSSProperties,
    onClick?: (mouseEvent: React.MouseEvent<Element>) => void,
    onMouseOver?: (mouseEvent: React.MouseEvent<Element>) => void,
    onMouseOut?: (mouseEvent: React.MouseEvent<Element>) => void,
    children?: ReactNode[]|ReactNode,
}
export interface GenericGridProps extends GenericInteractiveProps {
    outline?: boolean,
    colorMap?: IGridColorMap,
    cellSize?: number
}
export class Grid extends React.Component<IGridProps, {}> {
}
export interface ISquareProps {
    x: number;
    y: number;
    size?: number,
    style?: CSSProperties,
    transform?: string,
    onClick?: (mouseEvent: React.MouseEvent<SVGGElement>) => void,
    onMouseOver?: (mouseEvent: React.MouseEvent<SVGGElement>) => void,
    onMouseOut?: (mouseEvent: React.MouseEvent<SVGGElement>) => void,
    children?: ReactNode
}
export class Square extends React.Component<ISquareProps, {}> {
}
