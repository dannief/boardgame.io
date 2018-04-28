import * as React from 'react';
import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { ICardPropsCombined } from './card';
import { ReactElement } from 'react';

export interface IDeckState {
    cards: ReactNode[]
}
export interface IDeckProps {
    cards?: ReactElement<ICardPropsCombined>[],
    className?: string,
    onClick?(mouseEvent?: React.MouseEvent<HTMLDivElement>): void,
    splayWidth?: number,
}
export type IDeckPropsCombined = IDeckProps & HTMLAttributes<HTMLDivElement>;
export class Deck extends React.Component<IDeckPropsCombined, IDeckState>{
    constructor(props: IDeckPropsCombined);
}