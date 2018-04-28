import * as React from 'react';
import { CSSProperties } from 'react';
import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

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
export type IGridPropsCombined = IGridProps & HTMLAttributes<SVGElement>;
export class Grid extends React.Component<IGridPropsCombined, {}> {
    private _getCellColor(x: number, y: number): string;
    private _getGrid(): Square[]|null;
    onClick(mouseEvent: React.MouseEvent<SVGElement>): void;
    onMouseOver(mouseEvent: React.MouseEvent<SVGElement>): void;
    onMouseOut(mouseEvent: React.MouseEvent<SVGElement>): void;
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
export type ISquarePropsCombined = ISquareProps & HTMLAttributes<SVGGElement>;
export class Square extends React.Component<ISquarePropsCombined, {}> {
    onClick(mouseEvent: React.MouseEvent<Element>): void;
    onMouseOver(mouseEvent: React.MouseEvent<Element>): void;
    onMouseOut(mouseEvent: React.MouseEvent<Element>): void;
}
