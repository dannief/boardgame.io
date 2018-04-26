import { ReactNode } from 'react';

export interface ILogoProps {
    width: string,
    height: string
}
// FIXME: Can't figure out correct typing for stateless component function
export default function Logo ({ width, height }: ILogoProps): ReactNode;