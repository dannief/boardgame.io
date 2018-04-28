import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { IGridColorMap, IGridProps, ISquareProps } from './grid';

const gridProps: IGridProps = {
    rows: 0,
    cols: 0,
    outline: true,
    style: {},
    colorMap: {
        "0,1": "black"
    },
    cellSize: 0,
    onClick: (mouseEvent: React.MouseEvent<SVGElement>) => {},
    onMouseOver: (mouseEvent: React.MouseEvent<SVGElement>) => {},
    onMouseOut: (mouseEvent: React.MouseEvent<SVGElement>) => {},
    children: []
};


const squareProps: ISquareProps = {
    x: 0,
    y: 0,
    size: 0,
    style: {},
    transform: "translate(0, 1)",
    onClick: (mouseEvent: React.MouseEvent<SVGGElement>) => {},
    onMouseOver: (mouseEvent: React.MouseEvent<SVGGElement>) => {},
    onMouseOut: (mouseEvent: React.MouseEvent<SVGGElement>) => {},
    // children: // a ReactNode
};