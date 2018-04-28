import { HTMLAttributes, ReactElement, ReactNode } from 'react';

export interface ICardProps {
    back?: ReactNode,
    canHover?: boolean,
    className?: string,
    front?: ReactNode,
    isFaceUp?: boolean
}
export type ICardPropsCombined = ICardProps & HTMLAttributes<HTMLDivElement>;
export const Card: (props: ICardPropsCombined, ...rest: any[]) => ReactElement<ICardPropsCombined>;