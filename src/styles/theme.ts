export const theme = {
    colors: {
        primary: 'rgb(192, 170, 216)',
        primaryLight: 'rgb(251, 244, 237)',
        primaryDark: 'rgb(170, 156, 177)',
        secondary: 'rgb(217, 204, 221)',
        textDark: 'rgb(70, 56, 77)',
        textLight: '#fff',
    },
    fonts: {
        primary: "'Poppins', sans-serif",
        secondary: "'Adamina', serif",
    },
    breakpoints: {
        mobile: '768px',
        tablet: '1024px',
    },
} as const;

export type Theme = typeof theme;
