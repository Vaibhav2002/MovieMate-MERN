import {TypographyOptions} from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
    fontFamily: [
        'Montserrat',
        'Urbanist',
        'Helvetica',
        'Arial',
        'sans-serif',
    ].join(", "),
    h1: {
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: '6rem',
        letterSpacing: '-0.01562em',
    },
    h2: {
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: '3.75rem',
        letterSpacing: '-0.00833em',
    },
    h3: {
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: '3rem',
        letterSpacing: '0em',
    },
    h4: {
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: '2.125rem',
        letterSpacing: '0.00735em',
    },
    h5: {
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: '1.5rem',
        letterSpacing: '0em',
    },
    h6: {
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: '1.25rem',
        letterSpacing: '0.0075em',
    },
    body1: {
        fontFamily: 'Urbanist',
        fontWeight: 400,
        fontSize: '1rem',
        letterSpacing: '0.00938em',
    },
    body2: {
        fontFamily: 'Urbanist',
        fontWeight: 400,
        fontSize: '0.875rem',
        letterSpacing: '0.01071em',
    },
    subtitle1: {
        fontFamily: 'Urbanist',
        fontWeight: 400,
        fontSize: '1rem',
        letterSpacing: '0.00938em',
    },
    subtitle2: {
        fontFamily: 'Urbanist',
        fontWeight: 400,
        fontSize: '0.875rem',
        letterSpacing: '0.00714em',
    },
    button: {
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: '0.875rem',
        letterSpacing: '0.02857em',
    },
    caption: {
        fontFamily: 'Urbanist',
        fontWeight: 400,
        fontSize: '0.75rem',
        letterSpacing: '0.03333em',
    },
    overline: {
        fontFamily: 'Urbanist',
        fontWeight: 400,
        fontSize: '0.75rem',
        letterSpacing: '0.08333em',
    }
};

export default typography