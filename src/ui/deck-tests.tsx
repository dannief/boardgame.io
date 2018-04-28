import { Deck, IDeckProps } from './deck';
import * as React from 'react';
import { ReactElement } from 'react';
import { Card } from './card';

const deckProps: IDeckProps = {
    cards: [<Card key={0} />, <Card key={1} />],
    className: "myClassName",
    onClick: (mouseEvent: React.MouseEvent<HTMLDivElement>) => {},
    splayWidth: 0,
};

const tsxTests: ReactElement<IDeckProps>[] = [
    (
        <Deck className="custom" cards={deckProps.cards} />
    ),
    (
        <Deck cards={deckProps.cards} />
    ),
    (
        <Deck cards={deckProps.cards} splayWidth={deckProps.splayWidth} />
    )
];