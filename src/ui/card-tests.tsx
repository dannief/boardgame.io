import * as React from 'react';
import { ICardProps } from './card';
import Logo from './logo';

const cardProps: ICardProps = {
    // FIXME: Can't figure out correct typing for stateless component function
    back: (
        <div className="bgio-card__back">
            <Logo width="48" height="32" />
        </div>
    ),
    className: "myClassName",
    canHover: true,
    front: <div className="bgio-card__front">Card</div>,
    isFaceUp: false,
};