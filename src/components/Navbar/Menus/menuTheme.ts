import { Theme } from '@material-ui/core'

const backgroundColor = '#3b3b3a';

const menuTheme = (theme: Theme): Theme => ({
    ...theme,
    overrides: {
        ...theme.overrides,
        MuiPaper: {
            root: {
                backgroundColor: backgroundColor,
                padding: '0 10px',
                width: '300px',
            },
        },
        MuiMenuItem: {
            root: {
                borderBottom: '2px solid transparent',
                '&:hover': {
                    borderBottom:  '2px solid #ffde39',
                    backgroundColor,
                },
            }
        }
    },
});

export default menuTheme;