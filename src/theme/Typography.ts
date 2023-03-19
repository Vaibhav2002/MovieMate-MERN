import MontserratRegular from '../fonts/Montserrat-Regular.ttf';
import UrbanistRegular from '../fonts/Urbanist-Regular.ttf';

const typography = {
    fontFamily: [
        'Urbanist',
        'Montserrat',
        'Helvetica',
        'Arial',
        'sans-serif',
    ].join(','),
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
    // ...other typography styles
};

export default typography