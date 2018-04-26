import * as React from 'react';
import { ReactNode } from 'react';

export interface IDeckState {
    cards: ReactNode[]
}
export interface IDeckProps {
    cards?: ReactNode[],
    className?: string,
    onClick(mouseEvent?: React.MouseEvent<Element>): void,
    splayWidth?: number,
}
export class Deck extends React.Component<IDeckProps, IDeckState>{
    constructor(props: IDeckProps);
}