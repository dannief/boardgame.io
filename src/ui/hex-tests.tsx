import { ReactElement, ReactNode } from 'react';
import { HexGrid, IHexGridProps, IHexProps } from './hex';
import * as React from 'react';
import { Token } from './token';

const hexGridProps: IHexGridProps = {
    levels: 0,
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

const hexProps: IHexProps = {
    x: 0,
    y: 0,
    z: 0,
    size: 0,
    style: {},
    onClick: (mouseEvent: React.MouseEvent<SVGGElement>) => {},
    onMouseOver: (mouseEvent: React.MouseEvent<SVGGElement>) => {},
    onMouseOut: (mouseEvent: React.MouseEvent<SVGGElement>) => {},
    children: []
};

const hexGridTests: ReactElement<IHexGridProps>[] = [
    (
        <HexGrid levels={5} />
    ),
    (
        <HexGrid levels={5} outline={false} />
    ),
    (
        <HexGrid levels={4} onClick={hexGridProps.onClick} />
    ),
    (
        <HexGrid levels={4} onMouseOver={hexGridProps.onMouseOver} />
    ),
    (
        <HexGrid levels={4} />
    ),
    (
        <HexGrid levels={2} outline={false}>
            <Token x={0} y={0}/>
        </HexGrid>
    ),
    (
        <HexGrid levels={2} outline={false}>
            <Token x={0} y={0}>
                <div />
            </Token>
        </HexGrid>
    ),
    (
        <HexGrid levels={1} colorMap={hexGridProps.colorMap} />
    )
];