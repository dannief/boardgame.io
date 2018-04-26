import { ITokenProps, Token } from './token';

import { MouseEventHandler } from 'react';

const tokenProps: ITokenProps = {
    x: 0,
    y: 0,
    z: 0,
    // template: new Square(props, state),
    style: {},
    animate: false,
    onClick: (coord: any, ev: MouseEventHandler<Token>) => {},
    onMouseOver: (mouseEvent: MouseEventHandler<Token>) => {},
    onMouseOut: (mouseEvent: MouseEventHandler<Token>) => {},
    children: [],
    animationDuration: 0,
};