import * as React from 'react';
import { ITokenProps, Token } from './token';
import { ReactElement } from 'react';

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

const tsxTests: ReactElement<ITokenProps>[] = [
    (
        <Token x={1} y={2} animate={true}>
            <p>foo</p>
        </Token>
    ),
    (
        <Token x={0} y={0} animate={false} onClick={tokenProps.onClick}>
            <p>foo</p>
        </Token>
    ),
    (
        <Token x={0} y={0} animate={false} onMouseOver={tokenProps.onMouseOver}>
            <p>foo</p>
        </Token>
    ),
    (
        <Token x={0} y={0} animate={false} onMouseOut={tokenProps.onMouseOut}>
            <p>foo</p>
        </Token>
    )
];