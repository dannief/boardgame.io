import * as React from 'react';
import Logo, { ILogoProps } from './logo';
import { ReactElement } from 'react';

const logoProps: ILogoProps = {
    width: "24",
    height: "35"
};


const tsxTests: ReactElement<ILogoProps>[] = [
    (
        <Logo width={logoProps.width} height={logoProps.height}/>
    )
];