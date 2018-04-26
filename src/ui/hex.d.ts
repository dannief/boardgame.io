import * as React from 'react';
import { MouseEventHandler } from 'react';
import { ReactNode } from 'react';
import { GenericGridProps, IGridColorMap, IGridProps } from './grid';
import { CSSProperties } from 'react';

// I feel like this should extend Grid instead.
export interface IHexGridProps extends GenericGridProps {
    levels: number
}

export class HexGrid extends React.Component<IHexGridProps, {}> {
}