import { IDeckProps } from './deck';
import * as React from 'react';

const deckProps: IDeckProps = {
    cards: [],
    className: "myClassName",
    onClick: (mouseEvent: React.MouseEvent<Element>) => {},
    splayWidth: 0,
};