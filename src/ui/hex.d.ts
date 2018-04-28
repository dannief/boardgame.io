import * as React from 'react';
import { ReactNode } from 'react';
import { GenericGridProps, GenericInteractiveProps } from './grid';
import { HTMLAttributes } from 'react';

export interface IHexGridProps extends GenericGridProps {
    levels?: number
}
export type IHexGridPropsCombined = IHexGridProps & HTMLAttributes<SVGElement>;
export class HexGrid extends React.Component<IHexGridPropsCombined, {}> {
    private _getCellColor(x: number, y: number, z: number): string;
    private _getGrid(): Hex[]|null;
    onClick(mouseEvent: React.MouseEvent<SVGGElement>): void;
    onMouseOver(mouseEvent: React.MouseEvent<SVGGElement>): void;
    onMouseOut(mouseEvent: React.MouseEvent<SVGGElement>): void;
}
export interface IHexProps extends GenericInteractiveProps<SVGGElement> {
    x?: number,
    y?: number,
    z?: number,
    size?: number,
    children: ReactNode // Doesn't accept an array.
}
export type IHexPropsCombined = IHexProps & HTMLAttributes<SVGGElement>;
export class Hex extends React.Component<IHexPropsCombined, {}>{
    constructor(props: IHexPropsCombined);
    width(): number;
    height(): number;
    center(): { x: number, y: number };
    points(): string;
}