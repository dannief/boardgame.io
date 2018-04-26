import { ReactNode } from 'react';

export interface ICardProps {
    back: ReactNode,
    canHover: boolean,
    className: string,
    front: ReactNode,
    isFaceUp: boolean,
}
// Strictly, it returns a <div>, but I don't know how to specify that.
export function Card ({ back, canHover, className, front, isFaceUp, ...rest }: ICardProps): ReactNode;