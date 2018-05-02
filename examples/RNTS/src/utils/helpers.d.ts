import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface StyleObject {
    [key: string]: Partial<ComponentStyle>;
}

export type ComponentStyle = ViewStyle|ImageStyle|TextStyle;