import * as React from 'react';
import { Card, ICardProps } from './card';
import Logo from './logo';
import { ReactElement } from 'react';

const cardProps: ICardProps = {
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

const tsxTests: ReactElement<ICardProps>[] = [
    (
        <Card isFaceUp />
    ),
    (
        <Card isFaceUp className="custom" />
    ),
    (
        <Card
            onMouseOver={(mouseEvent: React.MouseEvent<HTMLDivElement>)=>{}}
            onClick={(mouseEvent: React.MouseEvent<HTMLDivElement>)=>{}}
        />
    )
];