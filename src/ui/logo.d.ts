import { ReactElement } from 'react';

export interface ILogoProps {
    width: string,
    height: string
}
export const Logo: (props: ILogoProps) => ReactElement<ILogoProps>;
export default Logo;