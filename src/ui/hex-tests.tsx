import { ReactNode } from 'react';
import { IHexGridProps, IHexProps } from './hex';

const hexGridProps: IHexGridProps = {
    levels: 0,
    outline: true,
    style: {},
    colorMap: {
        "0,1": "black"
    },
    cellSize: 0,
    onClick: (mouseEvent: React.MouseEvent<ReactNode>) => {},
    onMouseOver: (mouseEvent: React.MouseEvent<ReactNode>) => {},
    onMouseOut: (mouseEvent: React.MouseEvent<ReactNode>) => {},
    children: []
};

const hexProps: IHexProps = {
    x: 0,
    y: 0,
    z: 0,
    size: 0,
    style: {},
    onClick: (mouseEvent: React.MouseEvent<ReactNode>) => {},
    onMouseOver: (mouseEvent: React.MouseEvent<ReactNode>) => {},
    onMouseOut: (mouseEvent: React.MouseEvent<ReactNode>) => {},
    children: []
};