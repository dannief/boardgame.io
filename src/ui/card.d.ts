import { DOMAttributes, ReactElement, ReactNode } from 'react';

export interface ICardProps {
    back?: ReactNode,
    canHover?: boolean,
    className?: string,
    front?: ReactNode,
    isFaceUp?: boolean
}
export type ICardPropsCombined = ICardProps & DOMAttributes<HTMLDivElement>;
export const Card: (props: ICardPropsCombined, ...rest: any[]) => ReactElement<ICardPropsCombined>;