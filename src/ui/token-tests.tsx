import { ITokenProps, Token } from './token';

const tokenProps: ITokenProps = {
    x: 0,
    y: 0,
    z: 0,
    // template: new Square(props, state),
    style: {},
    animate: false,
    onClick: (coord: any, ev: React.MouseEvent<Token>) => {},
    onMouseOver: (mouseEvent: React.MouseEvent<Token>) => {},
    onMouseOut: (mouseEvent: React.MouseEvent<Token>) => {},
    children: [],
    animationDuration: 0,
};