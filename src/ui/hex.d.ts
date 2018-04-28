import * as React from 'react';
import { ReactNode } from 'react';
import { GenericGridProps, GenericInteractiveProps } from './grid';

export interface IHexGridProps extends GenericGridProps {
    levels: number
}
export class HexGrid extends React.Component<IHexGridProps, {}> {
    private _getCellColor(x: number, y: number, z: number): string;
    private _getGrid(): Hex[]|null;
    onClick(mouseEvent: React.MouseEvent<Element>): void;
    onMouseOver(mouseEvent: React.MouseEvent<Element>): void;
    onMouseOut(mouseEvent: React.MouseEvent<Element>): void;
}
export interface IHexProps extends GenericInteractiveProps<SVGGElement> {
    x?: number,
    y?: number,
    z?: number,
    size?: number,
    children: ReactNode // Doesn't accept an array.
}
export class Hex extends React.Component<IHexProps, {}>{
    constructor(props: IHexProps);
    width(): number;
    height(): number;
    center(): { x: number, y: number };
    points(): string;
}