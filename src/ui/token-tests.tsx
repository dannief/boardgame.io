import * as React from 'react';
import { ITokenProps, Token } from './token';

const tokenProps: ITokenProps = {
    x: 0,
    y: 0,
    z: 0,
    // template: new Square(props, state),
    style: {},
    animate: false,
    onClick: (mouseEvent: React.MouseEvent<HTMLElement>) => {},
    onMouseOver: (mouseEvent: React.MouseEvent<HTMLElement>) => {},
    onMouseOut: (mouseEvent: React.MouseEvent<HTMLElement>) => {},
    children: [],
    animationDuration: 0,
};