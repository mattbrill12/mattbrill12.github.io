import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            primaryLight: string;
            primaryDark: string;
            secondary: string;
            textDark: string;
            textLight: string;
            background: string;
        };
        fonts: {
            primary: string;
            secondary: string;
        };
        breakpoints: {
            mobile: string;
            tablet: string;
        };
    }
}