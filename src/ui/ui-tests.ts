import { ITokenProps } from 'boardgame.io/ui';
import * as React from 'react';

const tokenprops: ITokenProps = {
    x: 0,
    y: 0,
    z: 0,
    style: {},
    animate: true,
    onClick: (coord: any) => {
        console.log(coord);
    },
    children: null,
    animationDuration: 0,
    square: "hello",
};