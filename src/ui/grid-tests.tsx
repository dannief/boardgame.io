import * as React from 'react';
import { CSSProperties, MouseEventHandler, ReactElement, ReactNode } from 'react';
import { Grid, IGridColorMap, IGridProps, ISquareProps } from './grid';
import { IDeckProps } from './deck';
import { Token } from './token';

class MockChild extends React.Component<{}, {}> {
    render() {
        return <rect width="3" height="2" style={{ fill: 'red' }} />;
    }
}

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

const gridTsxTests: ReactElement<IDeckProps>[] = [
    (
        <Grid rows={3} cols={4} style={{ width: '500px' }}>
            <MockChild />
        </Grid>
    ),
    (
        <Grid rows={3} cols={4} outline={false} />
    ),
    (
        <Grid rows={3} cols={4} onClick={gridProps.onClick} />
    ),
    (
        <Grid rows={3} cols={4} />
    ),
    (
        <Grid rows={3} cols={4} onMouseOver={gridProps.onMouseOver} />
    ),
    (
        <Grid rows={3} cols={4} style={{ width: '500px' }}>
            <Token x={1} y={2}>
                <MockChild />
            </Token>
        </Grid>
    )
];


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