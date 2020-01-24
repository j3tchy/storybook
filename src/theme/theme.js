import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme();

const palette = {
    primary: {
        light: '#B1C4E1',
        main: '#0058db',
    },
    status: {
        warning: '#FFC107',
        success: '#5CAD00',
        error: '#F24A58',
    },
    statusBackground: {
        warning: '#FFF3D1',
        success: '#E9FFCF',
        error: '#FFEEEF',
    },
    statusText: {
        warning: '#7A5C00',
        success: '#3C7000',
        error: '#E01021',
    },
}


const typography = {
    h1: {
        fontSize: '2.125rem',
    },
    h2: {
        fontSize: '1.5rem'
    },
    h3: {
        fontSize: '1.25rem',
        fontWeight: 500,
    }
}

export default createMuiTheme({
    ...muiTheme,
    palette,
    typography,
});