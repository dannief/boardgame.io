import * as React from 'react';
import { ICardProps } from './card';

const cardProps: ICardProps = {
    back: (
        <div className="bgio-card__back">
            <Logo width="48" />
        </div>
    ),
    className: "myClassName",
    canHover: true,
    front: <div className="bgio-card__front">Card</div>,
    isFaceUp: false,
};