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
export interface GenericGridProps {
    outline?: boolean,
    style?: CSSProperties,
    colorMap?: IGridColorMap,
    cellSize?: number,
    onClick?: (mouseEvent: React.MouseEvent<ReactNode>) => void,
    onMouseOver?: (mouseEvent: React.MouseEvent<ReactNode>) => void,
    onMouseOut?: (mouseEvent: React.MouseEvent<ReactNode>) => void,
    children?: ReactNode[]|ReactNode,
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
