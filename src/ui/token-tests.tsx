import { ITokenProps, Token } from './token';

const tokenProps: ITokenProps = {
    x: 0,
    y: 0,
    z: 0,
    // template: new Square(props, state),
    style: {},
    animate: false,
    onClick: (mouseEvent: React.MouseEvent<Element>) => {},
    onMouseOver: (mouseEvent: React.MouseEvent<Element>) => {},
    onMouseOut: (mouseEvent: React.MouseEvent<Element>) => {},
    children: [],
    animationDuration: 0,
};