import { red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const palette: PaletteOptions = {
    primary: {
        main: red["500"],
    },
    background: {
        default: '#1f1f1f',
    },
    error: {
        main: red.A400,
    },
    action: {
        active: '#ffffff',
    },
    text: {
        primary: '#ffffff',
        secondary: '#8c8c8c',
    },
}

const theme = createTheme({
    palette,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            mobile: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: palette.background?.default,
            },
        },
        MuiDialog: {
            paper: {
                backgroundColor: palette.background?.default,
            }
        },
        MuiCssBaseline: {
            "@global": {
                "html, body, #root, #root>div:nth-child(2)": {
                    height: "100%"
                },
                body: {
                    overflowX: "hidden",
                }
            },
        }
    },
});

export default theme;